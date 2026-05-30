import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { PLANS, type PlanId } from "@/lib/plans";

const briefingSchema = z.object({
  honoreeName: z.string().min(1).max(80),
  giverName: z.string().min(1).max(80),
  relationship: z.string().min(1).max(80),
  occasion: z.string().min(1).max(80),
  story: z.string().min(20).max(2000),
  musicStyle: z.string().min(1).max(60),
  voiceType: z.enum(["masculina", "feminina", "dueto"]),
  mood: z.string().min(1).max(60),
  customerName: z.string().min(1).max(80),
  customerEmail: z.string().email().max(160),
  customerPhone: z.string().max(40).optional().or(z.literal("")),
});

export type BriefingInput = z.infer<typeof briefingSchema>;

export const createOrder = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      plan: z.enum(["essencial", "completa", "premium"]),
      briefing: briefingSchema,
    }),
  )
  .handler(async ({ data }) => {
    const plan = PLANS[data.plan as PlanId];
    const { data: order, error } = await supabaseAdmin
      .from("orders")
      .insert({
        customer_email: data.briefing.customerEmail,
        customer_name: data.briefing.customerName,
        customer_phone: data.briefing.customerPhone || null,
        plan: data.plan,
        amount_cents: plan.priceCents,
        status: "pending",
        briefing: data.briefing,
      })
      .select("id, download_token")
      .single();

    if (error || !order) {
      console.error("createOrder error", error);
      throw new Error("Não foi possível criar seu pedido. Tente novamente.");
    }

    return { orderId: order.id, downloadToken: order.download_token };
  });

export const getOrderStatus = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(8) }))
  .handler(async ({ data }) => {
    const { data: order } = await supabaseAdmin
      .from("orders")
      .select("id, status, plan, customer_name, briefing, created_at")
      .eq("download_token", data.token)
      .maybeSingle();

    if (!order) return { found: false as const };

    const { data: songs } = await supabaseAdmin
      .from("songs")
      .select("id, status, title, audio_url, image_url, lyrics, duration_seconds")
      .eq("order_id", order.id)
      .order("created_at", { ascending: true });

    return {
      found: true as const,
      order,
      songs: songs ?? [],
    };
  });

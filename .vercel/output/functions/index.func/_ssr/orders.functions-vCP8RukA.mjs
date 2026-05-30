import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server-DFO3XjkL.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { P as PLANS } from "./plans-DY9UmTKK.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...!SUPABASE_URL ? ["SUPABASE_URL"] : [],
      ...!SUPABASE_SERVICE_ROLE_KEY ? ["SUPABASE_SERVICE_ROLE_KEY"] : []
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(", ")}. Connect your Supabase project.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      storage: void 0,
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
let _supabaseAdmin;
const supabaseAdmin = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  }
});
const briefingSchema = objectType({
  honoreeName: stringType().min(1).max(80),
  giverName: stringType().min(1).max(80),
  relationship: stringType().min(1).max(80),
  occasion: stringType().min(1).max(80),
  story: stringType().min(20).max(2e3),
  musicStyle: stringType().min(1).max(60),
  voiceType: enumType(["masculina", "feminina", "dueto"]),
  mood: stringType().min(1).max(60),
  customerName: stringType().min(1).max(80),
  customerEmail: stringType().email().max(160),
  customerPhone: stringType().max(40).optional().or(literalType(""))
});
const createOrder_createServerFn_handler = createServerRpc({
  id: "7f92d135aa3763ddd5bf6d4d9f84832b6b591cbaa35dcc4048b4b1beed8e7bf3",
  name: "createOrder",
  filename: "src/lib/orders.functions.ts"
}, (opts) => createOrder.__executeServer(opts));
const createOrder = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  plan: enumType(["essencial", "completa", "premium"]),
  briefing: briefingSchema
})).handler(createOrder_createServerFn_handler, async ({
  data
}) => {
  const plan = PLANS[data.plan];
  const {
    data: order,
    error
  } = await supabaseAdmin.from("orders").insert({
    customer_email: data.briefing.customerEmail,
    customer_name: data.briefing.customerName,
    customer_phone: data.briefing.customerPhone || null,
    plan: data.plan,
    amount_cents: plan.priceCents,
    status: "pending",
    briefing: data.briefing
  }).select("id, download_token").single();
  if (error || !order) {
    console.error("createOrder error", error);
    throw new Error("Não foi possível criar seu pedido. Tente novamente.");
  }
  return {
    orderId: order.id,
    downloadToken: order.download_token
  };
});
const getOrderStatus_createServerFn_handler = createServerRpc({
  id: "e40ccc975bc24c952c0fab85be305e7810348730dc76906af0792e3377551cfe",
  name: "getOrderStatus",
  filename: "src/lib/orders.functions.ts"
}, (opts) => getOrderStatus.__executeServer(opts));
const getOrderStatus = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  token: stringType().min(8)
})).handler(getOrderStatus_createServerFn_handler, async ({
  data
}) => {
  const {
    data: order
  } = await supabaseAdmin.from("orders").select("id, status, plan, customer_name, briefing, created_at").eq("download_token", data.token).maybeSingle();
  if (!order) return {
    found: false
  };
  const {
    data: songs
  } = await supabaseAdmin.from("songs").select("id, status, title, audio_url, image_url, lyrics, duration_seconds").eq("order_id", order.id).order("created_at", {
    ascending: true
  });
  return {
    found: true,
    order,
    songs: songs ?? []
  };
});
export {
  createOrder_createServerFn_handler,
  getOrderStatus_createServerFn_handler
};

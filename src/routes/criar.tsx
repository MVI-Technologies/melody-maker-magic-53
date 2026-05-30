import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PLANS, PLAN_LIST, type PlanId } from "@/lib/plans";
import { createOrder } from "@/lib/orders.functions";
import { toast } from "sonner";

const searchSchema = z.object({
  plan: z.enum(["essencial", "completa", "premium"]).optional(),
});

export const Route = createFileRoute("/criar")({
  head: () => ({
    meta: [
      { title: "Criar minha música — CantataIA" },
      { name: "description", content: "Preencha o briefing e receba sua música personalizada feita com IA." },
    ],
  }),
  validateSearch: searchSchema,
  component: CriarPage,
});

const STYLES = ["Sertanejo", "Pop", "MPB", "Rock", "Gospel", "Funk", "Bossa Nova", "Infantil", "Reggae"];
const MOODS = ["Romântico", "Alegre", "Emotivo", "Divertido", "Nostálgico", "Reflexivo"];

interface Briefing {
  honoreeName: string;
  giverName: string;
  relationship: string;
  occasion: string;
  story: string;
  musicStyle: string;
  voiceType: "masculina" | "feminina" | "dueto";
  mood: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

const initial: Briefing = {
  honoreeName: "",
  giverName: "",
  relationship: "",
  occasion: "",
  story: "",
  musicStyle: "Sertanejo",
  voiceType: "feminina",
  mood: "Romântico",
  customerName: "",
  customerEmail: "",
  customerPhone: "",
};

function CriarPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const submit = useServerFn(createOrder);

  const [planId, setPlanId] = useState<PlanId>(search.plan ?? "completa");
  const [step, setStep] = useState(0);
  const [b, setB] = useState<Briefing>(initial);
  const [loading, setLoading] = useState(false);

  const plan = PLANS[planId];

  const totalSteps = 4;
  const update = <K extends keyof Briefing>(k: K, v: Briefing[K]) => setB((s) => ({ ...s, [k]: v }));

  const canAdvance = () => {
    if (step === 0) return b.honoreeName && b.giverName && b.relationship && b.occasion;
    if (step === 1) return b.story.length >= 20;
    if (step === 2) return b.musicStyle && b.voiceType && b.mood;
    if (step === 3) return b.customerName && /.+@.+\..+/.test(b.customerEmail);
    return false;
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await submit({ data: { plan: planId, briefing: b } });
      toast.success("Pedido criado! Redirecionando para o pagamento...");
      navigate({ to: "/sucesso", search: { token: res.downloadToken } });
    } catch (e) {
      console.error(e);
      toast.error("Não foi possível criar seu pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <SiteHeader />
      <main className="container mx-auto max-w-3xl px-4 py-12">
        <Link to="/" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>

        <h1 className="font-display text-4xl md:text-5xl">Vamos criar sua música</h1>
        <p className="mt-2 text-muted-foreground">
          Quanto mais detalhes você compartilhar, mais especial ela ficará.
        </p>

        {/* Plan selector */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {PLAN_LIST.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPlanId(p.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                planId === p.id
                  ? "border-primary bg-card shadow-soft ring-2 ring-primary/20"
                  : "border-border bg-card/60 hover:border-primary/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg">{p.name}</span>
                {planId === p.id && <Check className="h-4 w-4 text-primary" />}
              </div>
              <div className="mt-1 font-display text-2xl">{p.priceLabel}</div>
              <div className="text-xs text-muted-foreground">{p.tagline}</div>
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-10 mb-4 flex items-center gap-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-primary" : "bg-secondary"}`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">Passo {step + 1} de {totalSteps}</p>

        <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          {step === 0 && (
            <div className="space-y-5">
              <h2 className="font-display text-2xl">Para quem é a música?</h2>
              <Field label="Nome de quem vai receber">
                <input className={inputCls} value={b.honoreeName} onChange={(e) => update("honoreeName", e.target.value)} placeholder="Ex.: Helena" />
              </Field>
              <Field label="Seu nome (quem está presenteando)">
                <input className={inputCls} value={b.giverName} onChange={(e) => update("giverName", e.target.value)} placeholder="Ex.: João" />
              </Field>
              <Field label="Qual é a relação de vocês?">
                <input className={inputCls} value={b.relationship} onChange={(e) => update("relationship", e.target.value)} placeholder="Ex.: namorada, mãe, melhor amigo" />
              </Field>
              <Field label="Ocasião">
                <input className={inputCls} value={b.occasion} onChange={(e) => update("occasion", e.target.value)} placeholder="Ex.: aniversário de 30 anos" />
              </Field>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <h2 className="font-display text-2xl">Conte a história</h2>
              <p className="text-sm text-muted-foreground">Momentos marcantes, apelidos, lugares, frases que vocês dizem. Mínimo 20 caracteres.</p>
              <textarea
                className={`${inputCls} min-h-[200px] resize-y`}
                value={b.story}
                onChange={(e) => update("story", e.target.value)}
                placeholder="Nos conhecemos em 2018 numa festa de aniversário... ela ama café com leite pela manhã..."
                maxLength={2000}
              />
              <p className="text-right text-xs text-muted-foreground">{b.story.length}/2000</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-display text-2xl">Como você quer que soe?</h2>
              <Field label="Estilo musical">
                <div className="flex flex-wrap gap-2">
                  {STYLES.map((s) => (
                    <ChipButton key={s} active={b.musicStyle === s} onClick={() => update("musicStyle", s)}>{s}</ChipButton>
                  ))}
                </div>
              </Field>
              <Field label="Tipo de voz">
                <div className="grid grid-cols-3 gap-2">
                  {(["feminina", "masculina", "dueto"] as const).map((v) => (
                    <ChipButton key={v} active={b.voiceType === v} onClick={() => update("voiceType", v)} className="capitalize">{v}</ChipButton>
                  ))}
                </div>
              </Field>
              <Field label="Tom emocional">
                <div className="flex flex-wrap gap-2">
                  {MOODS.map((m) => (
                    <ChipButton key={m} active={b.mood === m} onClick={() => update("mood", m)}>{m}</ChipButton>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="font-display text-2xl">Para onde enviamos?</h2>
              <Field label="Seu nome completo">
                <input className={inputCls} value={b.customerName} onChange={(e) => update("customerName", e.target.value)} />
              </Field>
              <Field label="E-mail (vamos enviar o link da música aqui)">
                <input type="email" className={inputCls} value={b.customerEmail} onChange={(e) => update("customerEmail", e.target.value)} placeholder="voce@email.com" />
              </Field>
              <Field label="WhatsApp (opcional)">
                <input className={inputCls} value={b.customerPhone} onChange={(e) => update("customerPhone", e.target.value)} placeholder="(11) 99999-9999" />
              </Field>
              <div className="rounded-2xl bg-cream/60 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Plano <strong className="font-display">{plan.name}</strong></span>
                  <span className="font-display text-xl">{plan.priceLabel}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>

            {step < totalSteps - 1 ? (
              <button
                type="button"
                onClick={() => canAdvance() && setStep((s) => s + 1)}
                disabled={!canAdvance()}
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 disabled:opacity-40"
              >
                Continuar <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canAdvance() || loading}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-warm transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Ir para o pagamento — {plan.priceLabel}
              </button>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}

function ChipButton({
  active,
  onClick,
  children,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card hover:border-primary/40"
      } ${className}`}
    >
      {children}
    </button>
  );
}

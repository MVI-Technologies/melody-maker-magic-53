import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, c as createOrder } from "./orders.functions-BJX8trQI.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-chrome-DeHJDONw.mjs";
import { a as PLAN_LIST, P as PLANS } from "./plans-DY9UmTKK.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as Route$2 } from "./router-vWfBNAL1.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft, a as Check, b as ArrowRight, L as LoaderCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-Dt7mS1dt.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const STYLES = ["Sertanejo", "Pop", "MPB", "Rock", "Gospel", "Funk", "Bossa Nova", "Infantil", "Reggae"];
const MOODS = ["Romântico", "Alegre", "Emotivo", "Divertido", "Nostálgico", "Reflexivo"];
const initial = {
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
  customerPhone: ""
};
function CriarPage() {
  const search = Route$2.useSearch();
  const navigate = useNavigate();
  const submit = useServerFn(createOrder);
  const [planId, setPlanId] = reactExports.useState(search.plan ?? "completa");
  const [step, setStep] = reactExports.useState(0);
  const [b, setB] = reactExports.useState(initial);
  const [loading, setLoading] = reactExports.useState(false);
  const plan = PLANS[planId];
  const totalSteps = 4;
  const update = (k, v) => setB((s) => ({
    ...s,
    [k]: v
  }));
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
      const res = await submit({
        data: {
          plan: planId,
          briefing: b
        }
      });
      toast.success("Pedido criado! Redirecionando para o pagamento...");
      navigate({
        to: "/sucesso",
        search: {
          token: res.downloadToken
        }
      });
    } catch (e) {
      console.error(e);
      toast.error("Não foi possível criar seu pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto max-w-3xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Voltar"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: "Vamos criar sua música" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Quanto mais detalhes você compartilhar, mais especial ela ficará." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3 md:grid-cols-3", children: PLAN_LIST.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setPlanId(p.id), className: `rounded-2xl border p-4 text-left transition ${planId === p.id ? "border-primary bg-card shadow-soft ring-2 ring-primary/20" : "border-border bg-card/60 hover:border-primary/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: p.name }),
          planId === p.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-2xl", children: p.priceLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: p.tagline })
      ] }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mb-4 flex items-center gap-2", children: Array.from({
        length: totalSteps
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-primary" : "bg-secondary"}` }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Passo ",
        step + 1,
        " de ",
        totalSteps
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8", children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Para quem é a música?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome de quem vai receber", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: b.honoreeName, onChange: (e) => update("honoreeName", e.target.value), placeholder: "Ex.: Helena" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Seu nome (quem está presenteando)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: b.giverName, onChange: (e) => update("giverName", e.target.value), placeholder: "Ex.: João" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Qual é a relação de vocês?", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: b.relationship, onChange: (e) => update("relationship", e.target.value), placeholder: "Ex.: namorada, mãe, melhor amigo" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Ocasião", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: b.occasion, onChange: (e) => update("occasion", e.target.value), placeholder: "Ex.: aniversário de 30 anos" }) })
        ] }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Conte a história" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Momentos marcantes, apelidos, lugares, frases que vocês dizem. Mínimo 20 caracteres." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: `${inputCls} min-h-[200px] resize-y`, value: b.story, onChange: (e) => update("story", e.target.value), placeholder: "Nos conhecemos em 2018 numa festa de aniversário... ela ama café com leite pela manhã...", maxLength: 2e3 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-right text-xs text-muted-foreground", children: [
            b.story.length,
            "/2000"
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Como você quer que soe?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Estilo musical", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: STYLES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChipButton, { active: b.musicStyle === s, onClick: () => update("musicStyle", s), children: s }, s)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tipo de voz", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["feminina", "masculina", "dueto"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChipButton, { active: b.voiceType === v, onClick: () => update("voiceType", v), className: "capitalize", children: v }, v)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tom emocional", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: MOODS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(ChipButton, { active: b.mood === m, onClick: () => update("mood", m), children: m }, m)) }) })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Para onde enviamos?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Seu nome completo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: b.customerName, onChange: (e) => update("customerName", e.target.value) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "E-mail (vamos enviar o link da música aqui)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: inputCls, value: b.customerEmail, onChange: (e) => update("customerEmail", e.target.value), placeholder: "voce@email.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "WhatsApp (opcional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputCls, value: b.customerPhone, onChange: (e) => update("customerPhone", e.target.value), placeholder: "(11) 99999-9999" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-cream/60 p-4 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Plano ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-display", children: plan.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl", children: plan.priceLabel })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setStep((s) => Math.max(0, s - 1)), disabled: step === 0, className: "inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            " Voltar"
          ] }),
          step < totalSteps - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => canAdvance() && setStep((s) => s + 1), disabled: !canAdvance(), className: "inline-flex h-11 items-center gap-1.5 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 disabled:opacity-40", children: [
            "Continuar ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleSubmit, disabled: !canAdvance() || loading, className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-warm transition hover:opacity-90 disabled:opacity-50", children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null,
            "Ir para o pagamento — ",
            plan.priceLabel
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground/80", children: label }),
    children
  ] });
}
function ChipButton({
  active,
  onClick,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick, className: `rounded-full border px-4 py-2 text-sm transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"} ${className}`, children });
}
export {
  CriarPage as component
};

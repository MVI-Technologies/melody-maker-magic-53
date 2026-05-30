import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, l as logo, a as SiteFooter } from "./site-chrome-DRlSxKa_.mjs";
import { a as PLAN_LIST } from "./plans-DY9UmTKK.mjs";
import { c as Star, H as Heart, G as Gift, d as MicVocal, M as Music2, e as Send, S as Sparkles, f as Headphones, a as Check, b as ArrowRight, g as Clock, W as WandSparkles, h as Gem } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const example1 = "/assets/example-1-BVrGo7Y2.jpg";
const example2 = "/assets/example-2-CDOslRbE.jpg";
const example3 = "/assets/example-3-CCKWOXu1.jpg";
const steps = [{
  icon: Send,
  title: "Conte sua história",
  text: "Preencha o briefing com memórias, nomes e o estilo musical que quer ouvir."
}, {
  icon: Sparkles,
  title: "Nossa IA compõe",
  text: "Em poucos minutos, geramos letra, melodia e voz exclusivas para você."
}, {
  icon: Headphones,
  title: "Receba e emocione",
  text: "Baixe o MP3, presenteie e veja a reação inesquecível de quem ama."
}];
const occasions = [{
  icon: Heart,
  label: "Pedidos de namoro"
}, {
  icon: Gift,
  label: "Aniversários"
}, {
  icon: MicVocal,
  label: "Casamentos"
}, {
  icon: Music2,
  label: "Dia das Mães"
}];
const testimonials = [{
  name: "Mariana S.",
  text: "Chorei do início ao fim. Meu noivo amou e tocamos no casamento.",
  role: "Recife, PE"
}, {
  name: "Pedro H.",
  text: "Presenteei minha mãe no dia das mães. Foi o melhor presente que já dei.",
  role: "São Paulo, SP"
}, {
  name: "Camila R.",
  text: "A letra trouxe memórias que eu nem lembrava ter contado. Inacreditável.",
  role: "Curitiba, PR"
}];
const faqs = [{
  q: "Quanto tempo demora para receber?",
  a: "A maioria das músicas fica pronta em 30 minutos a 6 horas. O plano Premium tem prioridade máxima."
}, {
  q: "A música é realmente exclusiva?",
  a: "Sim. Cada composição é gerada a partir do seu briefing e cedida integralmente a você."
}, {
  q: "Posso pedir ajustes?",
  a: "Sim. Se algo não combinar com a sua história, refazemos sem custo dentro do plano."
}, {
  q: "Como recebo a música?",
  a: "Você recebe um link único por e-mail para ouvir e baixar o MP3 quando quiser."
}];
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob left-[-10%] top-[-10%] h-[480px] w-[480px] bg-primary/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob right-[-10%] top-[20%] h-[520px] w-[520px] bg-accent/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob left-[20%] bottom-[-15%] h-[400px] w-[400px] bg-primary/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-16 pb-20 text-center md:pt-24 md:pb-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "CantataIA", width: 120, height: 120, className: "h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_15px_40px_rgba(124,58,237,0.35)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl", children: [
          "Crie músicas ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm", children: "inesquecíveis e personalizadas" }),
          " para quem você ama"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: "Transforme seus sentimentos em uma canção única feita por inteligência artificial. O presente perfeito para os momentos especiais." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/criar", className: "inline-flex h-12 items-center justify-center rounded-full bg-gradient-hero px-8 text-sm font-semibold text-primary-foreground shadow-warm transition hover:translate-y-[-1px]", children: "Criar minha música" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#exemplos", className: "inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/80 px-8 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card", children: "Ouvir exemplos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-semibold text-foreground", children: "4,9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "+2.000 músicas entregues" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/60 bg-secondary/40 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4", children: occasions.map(({
      icon: Icon,
      label
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-foreground/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
    ] }, label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "como-funciona", className: "container mx-auto px-4 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Como funciona" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Três passos simples entre você e uma emoção para guardar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-lg text-primary-foreground shadow-warm", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mt-4 h-8 w-8 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: s.text })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "exemplos", className: "bg-gradient-warm py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-12 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Exemplos para se inspirar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Pequenas amostras dos estilos que mais emocionam." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
        title: "Para Helena, com amor",
        style: "Sertanejo acústico",
        image: example1
      }, {
        title: "30 anos de Júlia",
        style: "Pop romântico",
        image: example2
      }, {
        title: "Nosso casamento",
        style: "MPB intimista",
        image: example3
      }].map((ex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ex.image, alt: ex.title, width: 800, height: 800, loading: "lazy", className: "h-full w-full object-cover transition duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "h-3.5 w-3.5 text-primary" }),
            " Prévia em breve"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: ex.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: ex.style }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-1/3 bg-gradient-hero" }) })
        ] })
      ] }, ex.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "planos", className: "container mx-auto px-4 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Escolha o seu plano" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Preços únicos. Sem assinatura. Sem letras miúdas." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: PLAN_LIST.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-3xl border p-8 ${plan.highlight ? "border-primary bg-card shadow-warm md:-translate-y-2" : "border-border bg-card shadow-soft"}`, children: [
        plan.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-hero px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground", children: "Mais escolhido" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: plan.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: plan.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-gradient-warm", children: plan.priceLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pb-2 text-sm text-muted-foreground", children: [
            "/ ",
            plan.duration
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/criar", search: {
          plan: plan.id
        }, className: `mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${plan.highlight ? "bg-gradient-hero text-primary-foreground shadow-soft hover:translate-y-[-1px]" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`, children: [
          "Escolher ",
          plan.name
        ] })
      ] }, plan.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Quem ouviu, se emocionou" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-3xl border border-border bg-card p-7 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-lg leading-relaxed text-foreground/85", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: t.role })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "container mx-auto px-4 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-12 text-center font-display text-4xl md:text-5xl", children: "Perguntas frequentes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer items-center justify-between font-display text-lg", children: [
          f.q,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-primary transition group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 pb-28 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-hero px-6 py-20 text-center shadow-warm md:px-16 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-60", style: {
        background: "radial-gradient(60% 50% at 20% 10%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(50% 50% at 85% 20%, rgba(236,72,153,0.55), transparent 65%), radial-gradient(70% 60% at 50% 110%, rgba(124,58,237,0.6), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 opacity-[0.08]", style: {
        backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-float-slow rounded-full bg-white/25 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-float-slower rounded-full bg-accent/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "pointer-events-none absolute left-[8%] top-[18%] hidden h-7 w-7 animate-float-slow text-white/40 md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "pointer-events-none absolute right-[12%] top-[28%] hidden h-6 w-6 animate-float-slower text-white/50 md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "pointer-events-none absolute left-[14%] bottom-[18%] hidden h-6 w-6 animate-float-slow text-white/40 md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MicVocal, { className: "pointer-events-none absolute right-[10%] bottom-[22%] hidden h-7 w-7 animate-float-slower text-white/40 md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex max-w-3xl flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          "Música feita só para vocês"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-6xl", children: [
          "Transforme suas lembranças em uma",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "linear-gradient(90deg, #fff 0%, #ffe4f1 50%, #fff 100%)"
          }, children: "canção única" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl", children: "Conte sua história, escolha o estilo e nossa IA compõe — letra, melodia e voz — em poucos minutos. O presente mais emocionante que alguém pode receber." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/criar", className: "group/btn relative mt-10 inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-9 text-base font-semibold text-primary shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.55)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Quero criar minha música agora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "relative h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-white/95", children: [{
          Icon: Clock,
          label: "Feito em minutos"
        }, {
          Icon: WandSparkles,
          label: "100% personalizado"
        }, {
          Icon: Gem,
          label: "Presente único e memorável"
        }].map(({
          Icon,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-6 w-6 place-items-center rounded-full bg-white/15 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }) }),
          label
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-white/70", children: "Comece agora e receba sua música personalizada em poucos minutos." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  LandingPage as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
const logo = "/assets/logo-DvxL-63P.png";
function SiteHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "LoveTune logo", width: 36, height: 36, className: "h-9 w-9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl tracking-tight", children: [
        "Cantata",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm", children: "IA" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 text-sm font-medium md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#como-funciona", className: "text-muted-foreground transition hover:text-foreground", children: "Como funciona" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#exemplos", className: "text-muted-foreground transition hover:text-foreground", children: "Exemplos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#planos", className: "text-muted-foreground transition hover:text-foreground", children: "Planos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#faq", className: "text-muted-foreground transition hover:text-foreground", children: "FAQ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/criar",
        className: "inline-flex h-10 items-center justify-center rounded-full bg-gradient-hero px-5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:translate-y-[-1px]",
        children: "Criar agora"
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-10 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", width: 40, height: 40, className: "h-10 w-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-foreground", children: "CantataIA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-md", children: "Músicas personalizadas criadas com inteligência artificial a partir da sua história." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As composições são geradas por IA e cedidas integralmente ao comprador." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CantataIA — Todos os direitos reservados."
      ] })
    ] })
  ] }) }) });
}
export {
  SiteHeader as S,
  SiteFooter as a
};

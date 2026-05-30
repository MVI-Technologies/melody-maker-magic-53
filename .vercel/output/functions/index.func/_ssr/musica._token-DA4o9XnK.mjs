import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, g as getOrderStatus } from "./orders.functions-BJX8trQI.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-chrome-DeHJDONw.mjs";
import { b as Route } from "./router-vWfBNAL1.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { L as LoaderCircle, M as Music2, D as Download } from "../_libs/lucide-react.mjs";
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
function MusicaPage() {
  const {
    token
  } = Route.useParams();
  const fetchStatus = useServerFn(getOrderStatus);
  const {
    data,
    isLoading
  } = useQuery({
    queryKey: ["order", token],
    queryFn: () => fetchStatus({
      data: {
        token
      }
    }),
    refetchInterval: (q) => {
      const r = q.state.data;
      if (r?.found && r.order.status === "ready") return false;
      return 5e3;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto max-w-3xl px-4 py-12", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }) }) : !data?.found ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-10 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Link inválido" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Não encontramos uma música para este link." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground", children: "Voltar para o início" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Para ",
        data.order.customer_name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl", children: data.songs[0]?.title ?? "Sua música personalizada" }),
      data.songs.length === 0 || data.order.status !== "ready" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-8 text-center shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mx-auto h-8 w-8 animate-spin text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-display text-xl", children: "Sua música está sendo criada" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Pode levar entre 30 segundos e alguns minutos. Esta página atualiza sozinha." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-6", children: data.songs.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-soft", children: [
        s.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image_url, alt: s.title ?? "Capa da música", className: "aspect-square w-full object-cover sm:aspect-[3/1]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "h-4 w-4 text-primary" }),
            "Versão ",
            i + 1
          ] }),
          s.audio_url && /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { controls: true, src: s.audio_url, className: "w-full" }),
          s.audio_url && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: s.audio_url, download: true, className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            " Baixar MP3"
          ] }),
          s.lyrics && /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("summary", { className: "cursor-pointer text-sm font-medium text-primary", children: "Ver letra" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground", children: s.lyrics })
          ] })
        ] })
      ] }, s.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  MusicaPage as component
};

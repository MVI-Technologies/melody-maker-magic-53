import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useServerFn, g as getOrderStatus } from "./orders.functions-C33CbOjc.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-chrome-DRlSxKa_.mjs";
import { R as Route$3 } from "./router-CONoL4U5.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sonner.mjs";
import { C as CircleCheck, S as Sparkles, L as LoaderCircle, M as Music2 } from "../_libs/lucide-react.mjs";
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
import "./server-Ckx6LICW.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
function SucessoPage() {
  const {
    token
  } = Route$3.useSearch();
  const fetchStatus = useServerFn(getOrderStatus);
  const {
    data
  } = useQuery({
    queryKey: ["order-status", token],
    queryFn: () => fetchStatus({
      data: {
        token
      }
    }),
    refetchInterval: 5e3
  });
  const status = data?.found ? data.order.status : "pending";
  const isReady = status === "ready";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-warm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto max-w-2xl px-4 py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-hero shadow-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl md:text-5xl", children: "Pedido recebido!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Recebemos seu briefing e em breve enviaremos o link da sua música por e-mail." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-8 text-left shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          isReady ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl", children: isReady ? "Sua música está pronta!" : "Estamos compondo sua música..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
              status === "pending" && "Aguardando confirmação de pagamento.",
              status === "paid" && "Pagamento confirmado. Iniciando geração.",
              status === "generating" && "Nossa IA está criando a melodia, voz e letra.",
              status === "ready" && "Você já pode ouvir e baixar.",
              status === "failed" && "Algo deu errado. Entre em contato pelo nosso suporte."
            ] })
          ] })
        ] }),
        !isReady && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground", children: "Esta página atualiza sozinha. Você também receberá um e-mail assim que ficar pronta." }),
        isReady && /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/musica/$token", params: {
          token
        }, className: "mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "h-4 w-4" }),
          " Ouvir minha música"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-xs text-muted-foreground", children: [
        "Guarde este link: ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "rounded bg-secondary px-2 py-0.5 font-mono", children: [
          "/sucesso?token=",
          token.slice(0, 8),
          "…"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  SucessoPage as component
};

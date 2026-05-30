import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { CheckCircle2, Loader2, Music2, Sparkles } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getOrderStatus } from "@/lib/orders.functions";

export const Route = createFileRoute("/sucesso")({
  validateSearch: z.object({ token: z.string().min(8) }),
  head: () => ({
    meta: [{ title: "Pedido recebido — CantataIA" }, { name: "robots", content: "noindex" }],
  }),
  component: SucessoPage,
});

function SucessoPage() {
  const { token } = Route.useSearch();
  const fetchStatus = useServerFn(getOrderStatus);

  const { data } = useQuery({
    queryKey: ["order-status", token],
    queryFn: () => fetchStatus({ data: { token } }),
    refetchInterval: 5000,
  });

  const status = data?.found ? data.order.status : "pending";
  const isReady = status === "ready";

  return (
    <div className="min-h-screen bg-gradient-warm">
      <SiteHeader />
      <main className="container mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-hero shadow-warm">
          <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-5xl">Pedido recebido!</h1>
        <p className="mt-3 text-muted-foreground">
          Recebemos seu briefing e em breve enviaremos o link da sua música por e-mail.
        </p>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-left shadow-soft">
          <div className="flex items-center gap-3">
            {isReady ? (
              <Sparkles className="h-6 w-6 text-primary" />
            ) : (
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            )}
            <div>
              <div className="font-display text-xl">
                {isReady ? "Sua música está pronta!" : "Estamos compondo sua música..."}
              </div>
              <div className="text-sm text-muted-foreground">
                {status === "pending" && "Aguardando confirmação de pagamento."}
                {status === "paid" && "Pagamento confirmado. Iniciando geração."}
                {status === "generating" && "Nossa IA está criando a melodia, voz e letra."}
                {status === "ready" && "Você já pode ouvir e baixar."}
                {status === "failed" && "Algo deu errado. Entre em contato pelo nosso suporte."}
              </div>
            </div>
          </div>

          {!isReady && (
            <p className="mt-6 text-sm text-muted-foreground">
              Esta página atualiza sozinha. Você também receberá um e-mail assim que ficar pronta.
            </p>
          )}

          {isReady && (
            <Link
              to="/musica/$token"
              params={{ token }}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
            >
              <Music2 className="h-4 w-4" /> Ouvir minha música
            </Link>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Guarde este link: <code className="rounded bg-secondary px-2 py-0.5 font-mono">/sucesso?token={token.slice(0, 8)}…</code>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Download, Loader2, Music2 } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getOrderStatus } from "@/lib/orders.functions";

export const Route = createFileRoute("/musica/$token")({
  head: () => ({
    meta: [{ title: "Sua música — CantataIA" }, { name: "robots", content: "noindex" }],
  }),
  component: MusicaPage,
});

function MusicaPage() {
  const { token } = Route.useParams();
  const fetchStatus = useServerFn(getOrderStatus);
  const { data, isLoading } = useQuery({
    queryKey: ["order", token],
    queryFn: () => fetchStatus({ data: { token } }),
    refetchInterval: (q) => {
      const r = q.state.data;
      if (r?.found && r.order.status === "ready") return false;
      return 5000;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-warm">
      <SiteHeader />
      <main className="container mx-auto max-w-3xl px-4 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : !data?.found ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
            <h1 className="font-display text-3xl">Link inválido</h1>
            <p className="mt-2 text-muted-foreground">Não encontramos uma música para este link.</p>
            <Link to="/" className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground">
              Voltar para o início
            </Link>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">Para {data.order.customer_name}</p>
            <h1 className="font-display text-4xl md:text-5xl">
              {data.songs[0]?.title ?? "Sua música personalizada"}
            </h1>

            {data.songs.length === 0 || data.order.status !== "ready" ? (
              <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                <p className="mt-4 font-display text-xl">Sua música está sendo criada</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pode levar entre 30 segundos e alguns minutos. Esta página atualiza sozinha.
                </p>
              </div>
            ) : (
              <div className="mt-8 space-y-6">
                {data.songs.map((s, i) => (
                  <div key={s.id} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                    {s.image_url && (
                      <img src={s.image_url} alt={s.title ?? "Capa da música"} className="aspect-square w-full object-cover sm:aspect-[3/1]" />
                    )}
                    <div className="space-y-4 p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Music2 className="h-4 w-4 text-primary" />
                        Versão {i + 1}
                      </div>
                      {s.audio_url && <audio controls src={s.audio_url} className="w-full" />}
                      {s.audio_url && (
                        <a
                          href={s.audio_url}
                          download
                          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
                        >
                          <Download className="h-4 w-4" /> Baixar MP3
                        </a>
                      )}
                      {s.lyrics && (
                        <details className="mt-4">
                          <summary className="cursor-pointer text-sm font-medium text-primary">Ver letra</summary>
                          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted-foreground">
                            {s.lyrics}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

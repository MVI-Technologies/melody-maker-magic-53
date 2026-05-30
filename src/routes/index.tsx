import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Music2, Sparkles, Send, Headphones, Gift, Mic2, Check, Star } from "lucide-react";
import heroImg from "@/assets/hero-mic.jpg";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PLAN_LIST } from "@/lib/plans";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CantataIA — Músicas personalizadas feitas com IA" },
      { name: "description", content: "Transforme a sua história em uma música única. Briefing rápido, entrega em horas, emoção para a vida toda." },
      { property: "og:title", content: "CantataIA — Músicas personalizadas com IA" },
      { property: "og:description", content: "Presenteie com uma música feita só para vocês. Letras e melodias criadas pela sua história." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const steps = [
  { icon: Send, title: "Conte sua história", text: "Preencha o briefing com memórias, nomes e o estilo musical que quer ouvir." },
  { icon: Sparkles, title: "Nossa IA compõe", text: "Em poucos minutos, geramos letra, melodia e voz exclusivas para você." },
  { icon: Headphones, title: "Receba e emocione", text: "Baixe o MP3, presenteie e veja a reação inesquecível de quem ama." },
];

const occasions = [
  { icon: Heart, label: "Pedidos de namoro" },
  { icon: Gift, label: "Aniversários" },
  { icon: Mic2, label: "Casamentos" },
  { icon: Music2, label: "Dia das Mães" },
];

const testimonials = [
  { name: "Mariana S.", text: "Chorei do início ao fim. Meu noivo amou e tocamos no casamento.", role: "Recife, PE" },
  { name: "Pedro H.", text: "Presenteei minha mãe no dia das mães. Foi o melhor presente que já dei.", role: "São Paulo, SP" },
  { name: "Camila R.", text: "A letra trouxe memórias que eu nem lembrava ter contado. Inacreditável.", role: "Curitiba, PR" },
];

const faqs = [
  { q: "Quanto tempo demora para receber?", a: "A maioria das músicas fica pronta em 30 minutos a 6 horas. O plano Premium tem prioridade máxima." },
  { q: "A música é realmente exclusiva?", a: "Sim. Cada composição é gerada a partir do seu briefing e cedida integralmente a você." },
  { q: "Posso pedir ajustes?", a: "Sim. Se algo não combinar com a sua história, refazemos sem custo dentro do plano." },
  { q: "Como recebo a música?", a: "Você recebe um link único por e-mail para ouvir e baixar o MP3 quando quiser." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Música feita só para vocês
            </span>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Transforme a sua história em uma <span className="text-gradient-warm italic">música inesquecível</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Conte os momentos que marcaram vocês e nossa inteligência artificial compõe uma canção única —
              com letra, melodia e voz exclusivas — em poucas horas.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/criar"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-warm transition hover:translate-y-[-1px]"
              >
                Criar minha música
              </Link>
              <a
                href="#exemplos"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                Ouvir exemplos
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
                <span className="ml-1 font-medium text-foreground">4,9</span>
              </div>
              <div>+2.000 músicas entregues</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-hero opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Microfone vintage iluminado com notas musicais douradas"
              width={1600}
              height={1200}
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-warm"
            />
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="border-y border-border/60 bg-cream/40 py-10">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {occasions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-foreground/80">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="container mx-auto px-4 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">Como funciona</h2>
          <p className="mt-4 text-lg text-muted-foreground">Três passos simples entre você e uma emoção para guardar.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-lg font-semibold text-primary-foreground shadow-warm">
                {i + 1}
              </div>
              <s.icon className="mt-4 h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="exemplos" className="bg-gradient-warm py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl">Exemplos para se inspirar</h2>
            <p className="mt-4 text-lg text-muted-foreground">Pequenas amostras dos estilos que mais emocionam.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Para Helena, com amor", style: "Sertanejo acústico", color: "from-wine to-primary" },
              { title: "30 anos de Júlia", style: "Pop romântico", color: "from-primary to-gold" },
              { title: "Nosso casamento", style: "MPB intimista", color: "from-wine to-gold" },
            ].map((ex) => (
              <div key={ex.title} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className={`aspect-square bg-gradient-to-br ${ex.color} grid place-items-center`}>
                  <Music2 className="h-16 w-16 text-primary-foreground/80" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{ex.title}</h3>
                  <p className="text-sm text-muted-foreground">{ex.style}</p>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-1/3 bg-primary" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Prévia em breve</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planos" className="container mx-auto px-4 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl">Escolha o seu plano</h2>
          <p className="mt-4 text-lg text-muted-foreground">Preços únicos. Sem assinatura. Sem letras miúdas.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLAN_LIST.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlight
                  ? "border-primary bg-gradient-to-br from-cream to-card shadow-warm md:-translate-y-2"
                  : "border-border bg-card shadow-soft"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-hero px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-display text-2xl">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl text-foreground">{plan.priceLabel}</span>
                <span className="pb-2 text-sm text-muted-foreground">/ {plan.duration}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/criar"
                search={{ plan: plan.id }}
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground shadow-soft hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Escolher {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-wine py-24 text-cream">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-4xl text-cream md:text-5xl">Quem ouviu, se emocionou</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-cream/10 bg-cream/5 p-7 backdrop-blur">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="font-display text-lg italic leading-relaxed text-cream/90">"{t.text}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold text-cream">{t.name}</div>
                  <div className="text-cream/60">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display text-4xl md:text-5xl">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-soft">
                <summary className="flex cursor-pointer items-center justify-between font-display text-lg">
                  {f.q}
                  <span className="text-2xl text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-hero p-12 text-center shadow-warm md:p-16">
          <h2 className="font-display text-4xl text-primary-foreground md:text-5xl">
            Pronto para emocionar alguém especial?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Em poucos minutos você começa a transformar sentimentos em melodia.
          </p>
          <Link
            to="/criar"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-cream px-8 text-sm font-semibold text-wine shadow-soft transition hover:translate-y-[-1px]"
          >
            Criar minha música agora
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Music2, Sparkles, Send, Headphones, Gift, Mic2, Check, Star, ArrowRight, Clock, Wand2, Gem } from "lucide-react";
import logo from "@/assets/logo.png";
import example1 from "@/assets/example-1.jpg";
import example2 from "@/assets/example-2.jpg";
import example3 from "@/assets/example-3.jpg";
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

      {/* HERO — centered, LoveTune-style */}
      <section className="relative overflow-hidden">
        {/* Soft purple/pink blobs */}
        <div className="blob left-[-10%] top-[-10%] h-[480px] w-[480px] bg-primary/40" />
        <div className="blob right-[-10%] top-[20%] h-[520px] w-[520px] bg-accent/40" />
        <div className="blob left-[20%] bottom-[-15%] h-[400px] w-[400px] bg-primary/30" />

        <div className="container relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-16 pb-20 text-center md:pt-24 md:pb-28">
          <img
            src={logo}
            alt="CantataIA"
            width={120}
            height={120}
            className="h-24 w-24 md:h-32 md:w-32 drop-shadow-[0_15px_40px_rgba(124,58,237,0.35)]"
          />
          <h1 className="mt-8 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Crie músicas <span className="text-gradient-warm">inesquecíveis e personalizadas</span> para quem você ama
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Transforme seus sentimentos em uma canção única feita por inteligência artificial. O presente perfeito para os momentos especiais.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/criar"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-hero px-8 text-sm font-semibold text-primary-foreground shadow-warm transition hover:translate-y-[-1px]"
            >
              Criar minha música
            </Link>
            <a
              href="#exemplos"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/80 px-8 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              Ouvir exemplos
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1 font-semibold text-foreground">4,9</span>
            </div>
            <div>+2.000 músicas entregues</div>
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="border-y border-border/60 bg-secondary/40 py-10">
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
              <div className="absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-lg text-primary-foreground shadow-warm">
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
              { title: "Para Helena, com amor", style: "Sertanejo acústico", image: example1 },
              { title: "30 anos de Júlia", style: "Pop romântico", image: example2 },
              { title: "Nosso casamento", style: "MPB intimista", image: example3 },
            ].map((ex) => (
              <div key={ex.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                    <Music2 className="h-3.5 w-3.5 text-primary" /> Prévia em breve
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl">{ex.title}</h3>
                  <p className="text-sm text-muted-foreground">{ex.style}</p>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-1/3 bg-gradient-hero" />
                  </div>
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
                  ? "border-primary bg-card shadow-warm md:-translate-y-2"
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
                <span className="font-display text-5xl text-gradient-warm">{plan.priceLabel}</span>
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
                    ? "bg-gradient-hero text-primary-foreground shadow-soft hover:translate-y-[-1px]"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Escolher {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — light cards on lavender wash */}
      <section className="bg-secondary/40 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl">Quem ouviu, se emocionou</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-foreground/85">"{t.text}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
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

      {/* CTA — premium, glassy, alive */}
      <section className="container mx-auto px-4 pb-28 pt-4">
        <div className="group relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-hero px-6 py-20 text-center shadow-warm md:px-16 md:py-28">
          {/* Multi-layer atmosphere */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 50% at 20% 10%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(50% 50% at 85% 20%, rgba(236,72,153,0.55), transparent 65%), radial-gradient(70% 60% at 50% 110%, rgba(124,58,237,0.6), transparent 60%)",
            }}
          />
          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          {/* Floating blurred shapes */}
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-float-slow rounded-full bg-white/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-float-slower rounded-full bg-accent/40 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

          {/* Floating music notes */}
          <Music2 className="pointer-events-none absolute left-[8%] top-[18%] hidden h-7 w-7 animate-float-slow text-white/40 md:block" />
          <Sparkles className="pointer-events-none absolute right-[12%] top-[28%] hidden h-6 w-6 animate-float-slower text-white/50 md:block" />
          <Heart className="pointer-events-none absolute left-[14%] bottom-[18%] hidden h-6 w-6 animate-float-slow text-white/40 md:block" />
          <Mic2 className="pointer-events-none absolute right-[10%] bottom-[22%] hidden h-7 w-7 animate-float-slower text-white/40 md:block" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Música feita só para vocês
            </div>

            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-6xl">
              Transforme suas lembranças em uma{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #fff 0%, #ffe4f1 50%, #fff 100%)" }}
              >
                canção única
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Conte sua história, escolha o estilo e nossa IA compõe — letra, melodia e voz — em poucos minutos. O presente mais emocionante que alguém pode receber.
            </p>

            {/* Premium CTA */}
            <Link
              to="/criar"
              className="group/btn relative mt-10 inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-9 text-base font-semibold text-primary shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.55)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <span className="relative">Quero criar minha música agora</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            {/* Trust indicators */}
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-white/95">
              {[
                { Icon: Clock, label: "Feito em minutos" },
                { Icon: Wand2, label: "100% personalizado" },
                { Icon: Gem, label: "Presente único e memorável" },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 backdrop-blur">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-white/70">
              Comece agora e receba sua música personalizada em poucos minutos.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

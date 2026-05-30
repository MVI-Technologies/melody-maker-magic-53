import { useState, useEffect, useRef } from "react";
import { 
  Star, 
  ArrowRight, 
  Clock, 
  Wand2, 
  Gem, 
  Heart, 
  Music2, 
  Sparkles, 
  Send, 
  Headphones, 
  Gift, 
  Mic2, 
  Check, 
  Volume2, 
  VolumeX, 
  Shuffle, 
  Repeat, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack,
  FileText,
  Video,
  Zap,
  MessageSquare
} from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { PLAN_LIST } from "@/lib/plans";
import example1 from "@/assets/example-1.jpg";
import example2 from "@/assets/example-2.jpg";
import example3 from "@/assets/example-3.jpg";
import letter from "@/assets/letter.jpg";
import passionAsset from "@/assets/passion.png";
import romanceAsset from "@/assets/romance.png";
import anniversaryAsset from "@/assets/anniversary.png";

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
  { 
    name: "Mariana S.", 
    text: "Chorei do início ao fim. Meu noivo amou e tocamos no casamento.", 
    role: "Recife, PE",
    initials: "MS",
    gradient: "from-[#7C3AED] to-[#EC4899]",
    date: "há 2 dias"
  },
  { 
    name: "Pedro H.", 
    text: "Presenteei minha mãe no dia das mães. Foi o melhor presente que já dei.", 
    role: "São Paulo, SP",
    initials: "PH",
    gradient: "from-[#6366F1] to-[#7C3AED]",
    date: "há 5 dias"
  },
  { 
    name: "Camila R.", 
    text: "A letra trouxe memórias que eu nem lembrava ter contado. Inacreditável.", 
    role: "Curitiba, PR",
    initials: "CR",
    gradient: "from-[#EC4899] to-[#F59E0B]",
    date: "há 1 semana"
  },
];

const faqs = [
  { q: "Quanto tempo demora para receber?", a: "A maioria das músicas fica pronta em 30 minutos a 6 horas. O plano Premium tem prioridade máxima." },
  { q: "A música é realmente exclusiva?", a: "Sim. Cada composição é gerada a partir do seu briefing e cedida integralmente a você." },
  { q: "Posso pedir ajustes?", a: "Sim. Se algo não combinar com a sua história, refazemos sem custo dentro do plano." },
  { q: "Como recebo a música?", a: "Você recebe um link único por e-mail para ouvir e baixar o MP3 quando quiser." },
];

// ─── Waveform ────────────────────────────────────────────────────────────────
function Waveform({ playing }: { playing: boolean }) {
  const bars = 26;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2.5, height: 26 }}>
      {Array.from({ length: bars }, (_, i) => {
        const h = 5 + Math.sin(i * 0.85) * 5;
        return (
          <div
            key={i}
            className={playing ? "waveBar waveBarActive" : "waveBar"}
            style={{
              width: 2.5,
              height: h + 3,
              borderRadius: 2,
              background: "linear-gradient(to top, #7C3AED, #EC4899)",
              opacity: playing ? 0.85 : 0.3,
              // @ts-ignore
              "--dur": `${0.45 + (i * 0.03) % 0.4}s`,
              animationDelay: playing ? `${(i * 41) % 420}ms` : "0ms",
              transformOrigin: "bottom",
              transition: "opacity 0.35s",
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Custom Hook: useAnimateOnScroll ─────────────────────────────────────────
function useAnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

// ─── Music card ───────────────────────────────────────────────────────────────
function MusicCard() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(31);
  const [liked, setLiked] = useState(false);
  const [songIdx, setSongIdx] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number | null>(null);

  const songs = [
    { title: "Para Helena, com amor", sub: "Aniversário · Sertanejo acústico", icon: Heart, bg: "linear-gradient(135deg,#7C3AED 0%,#EC4899 100%)", image: passionAsset },
    { title: "Nosso primeiro olhar", sub: "Casamento · MPB intimista", icon: Music2, bg: "linear-gradient(135deg,#6366F1 0%,#7C3AED 100%)", image: romanceAsset },
    { title: "30 anos de Júlia", sub: "Aniversário · Pop romântico", icon: Sparkles, bg: "linear-gradient(135deg,#EC4899 0%,#F59E0B 100%)", image: anniversaryAsset },
  ];
  const song = songs[songIdx];

  const tick = (t: number) => {
    if (!lastTRef.current) lastTRef.current = t;
    const dt = (t - lastTRef.current) / 1000;
    lastTRef.current = t;
    setProgress(p => {
      const next = p + dt * (100 / 180);
      return next >= 99 ? 0 : next;
    });
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (playing) { 
      rafRef.current = requestAnimationFrame(tick); 
    } else { 
      if (rafRef.current) cancelAnimationFrame(rafRef.current); 
      lastTRef.current = null; 
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing]);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setProgress(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)));
  };

  const secs = Math.floor(progress / 100 * 195);

  const handleNext = () => {
    if (shuffle) {
      const randomIdx = Math.floor(Math.random() * songs.length);
      setSongIdx(randomIdx);
    } else {
      setSongIdx(i => (i + 1) % songs.length);
    }
    setProgress(0);
  };

  const handlePrev = () => {
    setSongIdx(i => (i - 1 + songs.length) % songs.length);
    setProgress(0);
  };

  return (
    <>
      <style>{`
        @keyframes waveAnim { from { transform: scaleY(1); } to { transform: scaleY(2.6); } }
        .waveBarActive { animation: waveAnim var(--dur, .55s) ease-in-out infinite alternate; }
        
        @keyframes cardFloat { 
          0%, 100% { transform: translateY(0) rotate(-0.5deg); } 
          50% { transform: translateY(-8px) rotate(0.3deg); } 
        }
        @keyframes tagFloat { 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-7px); } }
        @keyframes orbitSpin { from{ transform:rotate(0deg); } to{ transform:rotate(360deg); } }
        @keyframes haloGlow { 0%,100%{ opacity:.5; } 50%{ opacity:.75; } }
        
        .card-play:hover { transform: scale(1.06) !important; box-shadow: 0 12px 36px rgba(124,58,237,.55) !important; }
        .card-play { transition: transform .15s, box-shadow .15s; }
        
        .cta-main:hover { transform: translateY(-2px); box-shadow: 0 16px 44px rgba(124,58,237,.45) !important; }
        .cta-main { transition: transform .2s, box-shadow .2s; }
        
        .cta-ghost:hover { background: #f5f3ff !important; }
        .cta-ghost { transition: background .2s; }

        .music-card-glass {
          border: 1px solid transparent;
          background: linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.65)) padding-box,
                      linear-gradient(135deg, rgba(124, 58, 237, 0.35) 0%, rgba(236, 72, 153, 0.18) 100%) border-box;
        }

        .volume-slider {
          outline: none;
          height: 4px;
          border-radius: 2px;
          appearance: none;
          -webkit-appearance: none;
          background: #EDE9FE;
        }
        
        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #7C3AED;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
        .volume-slider::-moz-range-thumb {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #7C3AED;
          cursor: pointer;
          border: none;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Orbit ring behind card */}
      <div style={{
        position: "absolute", width: 420, height: 420, borderRadius: "50%",
        border: "1px dashed rgba(124,58,237,.18)",
        animation: "orbitSpin 28s linear infinite",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", top: -5, left: "50%", marginLeft: -5,
          width: 10, height: 10, borderRadius: "50%",
          background: "#7C3AED", boxShadow: "0 0 10px rgba(124,58,237,.7)",
        }} />
      </div>

      {/* Halo glow */}
      <div style={{
        position: "absolute", width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,.22) 0%, rgba(236,72,153,.14) 55%, transparent 75%)",
        filter: "blur(32px)",
        animation: "haloGlow 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      {/* The card container with perspective/reflect */}
      <div 
        className="music-card-glass"
        style={{
          position: "relative", zIndex: 2, width: 304,
          borderRadius: 26,
          boxShadow: "0 32px 72px rgba(124,58,237,.15), 0 4px 20px rgba(0,0,0,.04)",
          overflow: "hidden",
          animation: "cardFloat 5.5s ease-in-out infinite .4s",
          fontFamily: "inherit",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          // CSS mirror/reflect below card
          WebkitBoxReflect: "below 10px linear-gradient(transparent, transparent 60%, rgba(255, 255, 255, 0.08) 85%, rgba(255, 255, 255, 0.16) 100%)",
        }}
      >

        {/* Album art */}
        <div style={{ position: "relative", aspectRatio: "1", background: song.bg, overflow: "hidden" }}>
          {song.image ? (
            <img src={song.image} alt={song.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {(() => {
                const SongIcon = song.icon;
                return <SongIcon className="h-20 w-20 text-white opacity-80" />;
              })()}
            </div>
          )}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 20%, rgba(255,255,255,.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(0,0,0,.35) 0%, transparent 55%)" }} />

          {/* IA badge */}
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(0,0,0,.45)", backdropFilter: "blur(8px)",
            borderRadius: 20, padding: "4px 10px",
            fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: ".06em",
            border: "1px solid rgba(255,255,255,.2)",
            display: "flex", alignItems: "center", gap: 4
          }}>
            <Sparkles className="h-3 w-3 text-[#F59E0B]" />
            <span>Melodia inesquecível</span>
          </div>

          {/* Like */}
          <button
            onClick={() => setLiked(l => !l)}
            style={{
              position: "absolute", top: 10, right: 12,
              background: "rgba(0,0,0,.45)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,.2)", borderRadius: "50%",
              width: 32, height: 32, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "transform .2s, background .2s",
            }}
            className="hover:scale-110 active:scale-95"
          >
            <Heart 
              className={`h-4.5 w-4.5 transition-colors ${liked ? "fill-rose-500 text-rose-500" : "text-white"}`} 
            />
          </button>

          {/* Dots */}
          <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
            {songs.map((_, i) => (
              <button key={i} onClick={() => { setSongIdx(i); setProgress(6); }}
                style={{
                  width: i === songIdx ? 18 : 6, height: 6, borderRadius: 3,
                  background: i === songIdx ? "#fff" : "rgba(255,255,255,0.45)",
                  border: "none", cursor: "pointer", padding: 0, transition: "all .28s",
                }} />
            ))}
          </div>
        </div>

        {/* Controls and Track Info */}
        <div style={{ padding: "16px 16px 18px", background: "transparent" }}>
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#0F0A1E", marginBottom: 2, lineHeight: 1.3 }}>{song.title}</div>
            <div style={{ fontSize: 11, color: "#4C4B63", fontWeight: 500, letterSpacing: ".02em" }}>{song.sub}</div>
          </div>

          {/* Progress Slider */}
          <div
            style={{ height: 4, background: "#EDE9FE", borderRadius: 2, cursor: "pointer", position: "relative", marginBottom: 5 }}
            onClick={seek}
          >
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: `${progress}%`,
              background: "linear-gradient(90deg,#7C3AED,#EC4899)",
              borderRadius: 2, transition: "width .08s linear",
            }} />
            <div style={{
              position: "absolute", top: "50%", left: `${progress}%`,
              transform: "translate(-50%,-50%)",
              width: 10, height: 10, borderRadius: "50%",
              background: "#7C3AED", boxShadow: "0 0 0 3px rgba(124,58,237,.25)",
            }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#6B5B8F", fontWeight: 600, marginBottom: 8 }}>
            <span>{Math.floor(secs / 60)}:{String(secs % 60).padStart(2, "0")}</span>
            <span>3:15</span>
          </div>

          {/* Waveform */}
          <div style={{ marginBottom: 12 }}>
            <Waveform playing={playing} />
          </div>

          {/* Volume and Shuffle/Repeat Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 4, marginBottom: 16 }}>
            {/* Shuffle Button */}
            <button 
              onClick={() => setShuffle(s => !s)}
              style={{
                background: "none", border: "none", cursor: "pointer", 
                color: shuffle ? "#7C3AED" : "#9CA3AF",
                transition: "color 0.2s, transform 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
              className="hover:scale-110 active:scale-95"
              title="Aleatório"
            >
              <Shuffle className="h-4 w-4" style={{ filter: shuffle ? "drop-shadow(0 0 3px rgba(124,58,237,0.3))" : "none" }} />
            </button>

            {/* Volume Container */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
              <button 
                onClick={() => setIsMuted(m => !m)}
                style={{
                  background: "none", border: "none", cursor: "pointer", 
                  color: "#7C3AED", display: "flex", alignItems: "center"
                }}
                className="hover:scale-110"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4 text-rose-500" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={isMuted ? 0 : volume} 
                onChange={(e) => { 
                  setVolume(Number(e.target.value)); 
                  setIsMuted(false); 
                }} 
                style={{
                  flex: 1,
                  background: `linear-gradient(90deg, #7C3AED 0%, #7C3AED ${(isMuted ? 0 : volume) * 100}%, #EDE9FE ${(isMuted ? 0 : volume) * 100}%, #EDE9FE 100%)`,
                }}
                className="volume-slider"
              />
            </div>

            {/* Repeat Button */}
            <button 
              onClick={() => setRepeat(r => !r)}
              style={{
                background: "none", border: "none", cursor: "pointer", 
                color: repeat ? "#7C3AED" : "#9CA3AF",
                transition: "color 0.2s, transform 0.2s",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
              className="hover:scale-110 active:scale-95"
              title="Repetir"
            >
              <Repeat className="h-4 w-4" style={{ filter: repeat ? "drop-shadow(0 0 3px rgba(124,58,237,0.3))" : "none" }} />
            </button>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button 
              onClick={handlePrev}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#6B5B8F", padding: 6 }}
              className="hover:text-primary active:scale-90 transition-transform"
            >
              <SkipBack className="h-5 w-5 fill-current" />
            </button>

            <button
              className="card-play"
              onClick={() => setPlaying(p => !p)}
              style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg,#7C3AED,#EC4899)",
                border: "none", cursor: "pointer", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 6px 20px rgba(124,58,237,.35)",
              }}>
              {playing ? (
                <Pause className="h-5 w-5 fill-current text-white" />
              ) : (
                <Play className="h-5 w-5 fill-current text-white ml-0.5" />
              )}
            </button>

            <button 
              onClick={handleNext}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#6B5B8F", padding: 6 }}
              className="hover:text-primary active:scale-90 transition-transform"
            >
              <SkipForward className="h-5 w-5 fill-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating tags with real Lucide icons instead of emojis */}
      {[
        { icon: Gift, label: "Aniversários",        style: { top: "4%",   right: "-4%"  }, delay: "0s"   },
        { icon: Heart, label: "Casamentos",           style: { top: "32%",  left: "-10%"  }, delay: "1.2s" },
        { icon: Sparkles, label: "Dia das Mães",         style: { bottom:"20%",right: "-6%"  }, delay: "2.4s" },
        { icon: Music2, label: "MPB · Sertanejo · Pop",style: { bottom:"5%", left: "-8%"  }, delay: ".6s"  },
      ].map(({ icon: Icon, label, style, delay }) => (
        <div key={label} style={{
          position: "absolute", ...style,
          background: "rgba(255,255,255,.82)", backdropFilter: "blur(10px)",
          border: "1px solid rgba(124,58,237,.18)",
          borderRadius: 100, padding: "6px 12px",
          fontSize: 12, fontWeight: 600, color: "#4C1D95",
          boxShadow: "0 4px 16px rgba(124,58,237,.1)",
          whiteSpace: "nowrap", pointerEvents: "none",
          animation: `tagFloat ${6 + Math.random() * 2}s ease-in-out infinite`,
          animationDelay: delay,
          display: "flex",
          alignItems: "center",
          gap: 6
        }}>
          <Icon className="h-3.5 w-3.5 text-primary" />
          <span>{label}</span>
        </div>
      ))}
    </>
  );
}

// ─── Hero section ────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Original blobs — kept exactly */}
      <div className="blob left-[-10%] top-[-10%] h-[480px] w-[480px] bg-primary/40" />
      <div className="blob right-[-10%] top-[20%] h-[520px] w-[520px] bg-accent/40" />
      <div className="blob left-[20%] bottom-[-15%] h-[400px] w-[400px] bg-primary/30" />

      {/* Hero container */}
      <div className="container relative mx-auto max-w-6xl px-6 pt-4 pb-12 md:pt-6 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT COPY (with sequenced fade-in slide-up) ── */}
          <div className="flex flex-col items-start">

            <h1 
              className="animate-fade-in-up font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.08] tracking-tight text-foreground"
              style={{ 
                fontFeatureSettings: '"ss01"', 
                letterSpacing: "-0.03em",
                animationDelay: "0ms"
              }}
            >
              Crie músicas{" "}
              <span className="text-gradient-warm font-medium">inesquecíveis e personalizadas</span>{" "}
              <span className="whitespace-nowrap">para quem ama</span>
            </h1>

            <p 
              className="animate-fade-in-up mt-4 max-w-lg text-sm md:text-base text-[#4C4B63] font-medium leading-relaxed"
              style={{ animationDelay: "150ms" }}
            >
              Transforme seus sentimentos em uma canção única feita por inteligência artificial.
              O presente perfeito para os momentos especiais.
            </p>

            {/* CTAs */}
            <div 
              className="animate-fade-in-up mt-6 flex flex-wrap items-center gap-2 sm:gap-3"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to="/criar"
                className="cta-main inline-flex h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-gradient-hero px-4 sm:px-8 text-xs font-semibold text-primary-foreground shadow-warm"
              >
                Criar minha música <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#exemplos"
                className="cta-ghost inline-flex h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-border bg-card/85 px-4 sm:px-8 text-xs font-semibold text-foreground backdrop-blur"
              >
                Ouvir exemplos
              </a>
            </div>

            {/* Stars + count */}
            <div 
              className="animate-fade-in-up mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#4C4B63] font-semibold"
              style={{ animationDelay: "450ms" }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
                <span className="ml-1 font-bold text-foreground">4,9</span>
              </div>
              <span>+2.000 músicas entregues</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> ~30 min
              </span>
            </div>
          </div>

          {/* ── RIGHT VISUAL (MusicCard with reflection) ── */}
          <div className="relative flex items-center justify-center" style={{ minHeight: 520 }}>
            <MusicCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature Icon Resolver ───────────────────────────────────────────────────
function getFeatureIcon(feature: string) {
  const text = feature.toLowerCase();
  if (text.includes("versão") || text.includes("versões")) return Music2;
  if (text.includes("letra") || text.includes("pdf")) return FileText;
  if (text.includes("entrega") || text.includes("expressa") || text.includes("prioritária") || text.includes("prioridade")) return Zap;
  if (text.includes("download") || text.includes("e-mail")) return Send;
  if (text.includes("capa")) return Gem;
  if (text.includes("vídeo") || text.includes("lyric")) return Video;
  if (text.includes("suporte") || text.includes("whatsapp")) return MessageSquare;
  return Check;
}

// ─── LandingPage ─────────────────────────────────────────────────────────────
function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<"mensal" | "anual">("mensal");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Initialize global intersection observer animations
  useAnimateOnScroll();

  // Testimonials Auto-scroll Carousel Effect (Mobile only)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let intervalId: any;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (window.innerWidth >= 768) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 5) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: 290, behavior: "smooth" });
        }
      }, 3500);
    };

    startAutoScroll();

    const handleInteraction = () => {
      clearInterval(intervalId);
      // Restart auto scroll after 5 seconds of no interaction
      setTimeout(startAutoScroll, 5000);
    };

    el.addEventListener("touchstart", handleInteraction, { passive: true });
    el.addEventListener("mousedown", handleInteraction);

    return () => {
      clearInterval(intervalId);
      el.removeEventListener("touchstart", handleInteraction);
      el.removeEventListener("mousedown", handleInteraction);
    };
  }, []);

  // Helper pricing mappings
  const getPriceLabel = (planId: string, cycle: "mensal" | "anual") => {
    if (cycle === "mensal") {
      if (planId === "essencial") return "R$ 49";
      if (planId === "completa") return "R$ 89";
      if (planId === "premium") return "R$ 149";
    } else {
      // 20% discount on monthly cycle equivalent
      if (planId === "essencial") return "R$ 39";
      if (planId === "completa") return "R$ 71";
      if (planId === "premium") return "R$ 119";
    }
    return "";
  };

  const getBilledLabel = (planId: string, cycle: "mensal" | "anual") => {
    if (cycle === "anual") {
      if (planId === "essencial") return "Cobrado anualmente: R$ 468/ano";
      if (planId === "completa") return "Cobrado anualmente: R$ 852/ano";
      if (planId === "premium") return "Cobrado anualmente: R$ 1.428/ano";
    }
    return "pagamento único";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header glass effect styles are globally defined in styles.css override below */}
      <SiteHeader />

      <HeroSection />

      {/* Global CSS styles override block */}
      <style>{`
        header {
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          background-color: rgba(255, 255, 255, 0.72) !important;
          border-bottom: 1px solid rgba(124, 58, 237, 0.08) !important;
          position: sticky !important;
          top: 0;
          z-index: 50;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* starts invisible */
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .shimmer-badge-active {
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.22) 50%, rgba(245, 158, 11, 0.08) 100%);
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite linear;
        }

        /* Border Glow Animation for Preferred Plan */
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(124, 58, 237, 0.8);
            box-shadow: 0 0 15px rgba(124, 58, 237, 0.25), 0 20px 60px -20px rgba(124, 58, 237, 0.45);
          }
          33% {
            border-color: rgba(236, 72, 153, 0.8);
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.25), 0 20px 60px -20px rgba(124, 58, 237, 0.45);
          }
          66% {
            border-color: rgba(245, 158, 11, 0.8);
            box-shadow: 0 0 15px rgba(245, 158, 11, 0.25), 0 20px 60px -20px rgba(124, 58, 237, 0.45);
          }
        }
        .animate-glow-card {
          animation: borderGlow 6s linear infinite;
          border-width: 2px !important;
        }

        /* Accessibility: respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .reveal-on-scroll {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .animate-fade-in-up, .shimmer-badge-active, .card-play, .cta-main, .animate-glow-card, .waveBarActive {
            animation: none !important;
            transform: none !important;
            transition: none !important;
            opacity: 1 !important;
          }
          .music-card-glass {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* OCCASIONS - perfectly centered, fixed whitespace typo */}
      <section className="reveal-on-scroll border-y border-border/60 bg-secondary/40 py-8">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {occasions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-foreground/80 justify-center">
              <Icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="reveal-on-scroll container mx-auto px-4 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Como funciona</h2>
          <p className="mt-4 text-lg text-[#4C4B63] font-semibold">Três passos simples entre você e uma emoção para guardar.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:translate-y-[-2px] transition duration-300">
              <div className="absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-lg text-primary-foreground shadow-warm">
                {i + 1}
              </div>
              <s.icon className="mt-4 h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-[#4C4B63] font-medium leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="exemplos" className="reveal-on-scroll bg-gradient-warm py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Exemplos para se inspirar</h2>
            <p className="mt-4 text-lg text-[#4C4B63] font-semibold">Pequenas amostras dos estilos que mais emocionam.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Para Helena, com amor", style: "Sertanejo acústico", image: example1 },
              { title: "30 anos de Júlia", style: "Pop romântico", image: example2 },
              { title: "Nosso casamento", style: "MPB intimista", image: example3 },
            ].map((ex) => (
              <div key={ex.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-md transition duration-300">
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
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                    <Music2 className="h-3.5 w-3.5 text-primary" /> Prévia em breve
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-foreground">{ex.title}</h3>
                  <p className="text-sm text-[#4C4B63] font-semibold">{ex.style}</p>
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
      <section id="planos" className="reveal-on-scroll container mx-auto px-4 py-24">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Escolha o seu plano</h2>
          <p className="mt-4 text-lg text-[#4C4B63] font-semibold">Valores transparentes e flexíveis de faturamento.</p>
        </div>

        {/* Toggle Faturamento Anual / Mensal */}
        <div className="mb-14 flex items-center justify-center gap-3">
          <span className={`text-sm font-semibold transition-colors duration-200 ${billingCycle === "mensal" ? "text-foreground" : "text-[#4C4B63]"}`}>
            Mensal
          </span>
          <button
            onClick={() => setBillingCycle(c => c === "mensal" ? "anual" : "mensal")}
            className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none"
            aria-label="Toggle billing cycle"
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingCycle === "anual" ? "translate-x-5" : "translate-x-0"}`}
            />
          </button>
          <span className={`text-sm font-semibold flex items-center gap-1.5 transition-colors duration-200 ${billingCycle === "anual" ? "text-foreground" : "text-[#4C4B63]"}`}>
            Anual
            <span className="rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 px-2.5 py-0.5 text-xs font-bold text-[#F59E0B] shadow-[0_2px_8px_rgba(245,158,11,0.08)]">
              Economize 20%
            </span>
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PLAN_LIST.map((plan) => {
            const currentPrice = getPriceLabel(plan.id, billingCycle);
            const billingPeriod = getBilledLabel(plan.id, billingCycle);
            const isPreferred = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border p-8 transition-transform duration-300 ${
                  isPreferred
                    ? "animate-glow-card bg-card md:-translate-y-2"
                    : "border-border bg-card shadow-soft hover:translate-y-[-2px]"
                }`}
              >
                {isPreferred && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-hero px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-[#F59E0B] fill-[#F59E0B]" />
                    Mais escolhido
                  </span>
                )}
                <h3 className="font-display text-2xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-[#4C4B63] font-semibold mt-1">{plan.tagline}</p>
                <div className="mt-6 flex flex-col">
                  <div className="flex items-end gap-2">
                    <span className="font-display text-5xl text-gradient-warm">{currentPrice}</span>
                    <span className="pb-2 text-sm text-[#4C4B63] font-bold">/ {billingCycle === "mensal" ? "música" : "mês"}</span>
                  </div>
                  <span className="text-xs text-primary font-bold mt-1 uppercase tracking-wider">{billingPeriod}</span>
                </div>

                {/* Features List with customized Lucide icons */}
                <ul className="mt-8 space-y-4 text-sm flex-1">
                  {plan.features.map((f) => {
                    const FeatureIcon = getFeatureIcon(f);
                    return (
                      <li key={f} className="flex items-start gap-3">
                        <FeatureIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                        <span className="text-foreground/90 font-medium">{f}</span>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  to="/criar"
                  search={{ plan: plan.id }}
                  className={`mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 ${
                    isPreferred
                      ? "bg-gradient-hero text-primary-foreground shadow-soft hover:scale-[1.02] active:scale-[0.98]"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                  }`}
                >
                  Escolher {plan.name}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="reveal-on-scroll bg-secondary/40 py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Quem ouviu, se emocionou</h2>
          </div>

          {/* Testimonial slider / mobile carousel with initials avatars */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((t) => (
              <figure 
                key={t.name} 
                className="w-[85vw] shrink-0 snap-center md:w-auto rounded-3xl border border-border bg-card p-7 shadow-soft flex flex-col justify-between hover:translate-y-[-2px] transition duration-300"
              >
                <div>
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg leading-relaxed text-foreground/90 font-medium italic">
                    "{t.text}"
                  </blockquote>
                </div>

                <figcaption className="mt-6 border-t border-border/80 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Custom initials gradient avatar */}
                    <div className={`grid h-11 w-11 place-items-center rounded-full text-xs font-bold text-white shadow-sm bg-gradient-to-tr ${t.gradient}`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t.name}</div>
                      <div className="text-xs text-[#4C4B63] font-semibold">{t.role}</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-secondary px-2.5 py-1 rounded-full font-bold text-primary tracking-wide">
                    {t.date}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="reveal-on-scroll container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-display text-4xl md:text-5xl text-foreground">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors duration-200 open:bg-card">
                <summary className="flex cursor-pointer items-center justify-between font-display text-lg text-foreground hover:text-primary transition-colors">
                  {f.q}
                  <span className="text-2xl text-primary transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[#4C4B63] font-medium leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal-on-scroll container mx-auto px-4 pb-28 pt-4">
        <div className="group relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-hero px-6 py-20 text-center shadow-warm md:px-16 md:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 50% at 20% 10%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(50% 50% at 85% 20%, rgba(236,72,153,0.55), transparent 65%), radial-gradient(70% 60% at 50% 110%, rgba(124,58,237,0.6), transparent 60%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 animate-float-slow rounded-full bg-white/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-float-slower rounded-full bg-accent/40 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

          <Music2 className="pointer-events-none absolute left-[8%] top-[18%] hidden h-7 w-7 animate-float-slow text-white/40 md:block" />
          <Sparkles className="pointer-events-none absolute right-[12%] top-[28%] hidden h-6 w-6 animate-float-slower text-white/50 md:block" />
          <Heart className="pointer-events-none absolute left-[14%] bottom-[18%] hidden h-6 w-6 animate-float-slow text-white/40 md:block" />
          <Mic2 className="pointer-events-none absolute right-[10%] bottom-[22%] hidden h-7 w-7 animate-float-slower text-white/40 md:block" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
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

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl font-medium">
              Conte sua história, escolha o estilo e nossa IA compõe — letra, melodia e voz — em poucos minutos. O presente mais emocionante que alguém pode receber.
            </p>

            <Link
              to="/criar"
              className="group/btn relative mt-10 inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-9 text-base font-semibold text-primary shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.55)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <span className="relative">Quero criar minha música agora</span>
              <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

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

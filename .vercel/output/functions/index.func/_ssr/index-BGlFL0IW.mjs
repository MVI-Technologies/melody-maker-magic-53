import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./site-chrome-DeHJDONw.mjs";
import { a as PLAN_LIST } from "./plans-DY9UmTKK.mjs";
import { b as ArrowRight, c as Star, d as Clock, H as Heart, G as Gift, e as MicVocal, M as Music2, f as Send, S as Sparkles, g as Headphones, W as WandSparkles, h as Gem, i as Shuffle, V as VolumeX, j as Volume2, R as Repeat, k as SkipBack, P as Pause, l as Play, m as SkipForward, F as FileText, Z as Zap, n as Video, o as MessageSquare, a as Check } from "../_libs/lucide-react.mjs";
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
const passionLightAsset = "/assets/passion_light-CRaPx5bQ.png";
const romanceLightAsset = "/assets/romance_light-7rJvqoOw.png";
const anniversaryLightAsset = "/assets/anniversary_light-CMYRvo-M.png";
const heroBgLight = "/assets/hero_bg_light-DWFQcfQL.png";
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
  role: "Recife, PE",
  initials: "MS",
  gradient: "from-[#7C3AED] to-[#EC4899]",
  date: "há 2 dias"
}, {
  name: "Pedro H.",
  text: "Presenteei minha mãe no dia das mães. Foi o melhor presente que já dei.",
  role: "São Paulo, SP",
  initials: "PH",
  gradient: "from-[#6366F1] to-[#7C3AED]",
  date: "há 5 dias"
}, {
  name: "Camila R.",
  text: "A letra trouxe memórias que eu nem lembrava ter contado. Inacreditável.",
  role: "Curitiba, PR",
  initials: "CR",
  gradient: "from-[#EC4899] to-[#F59E0B]",
  date: "há 1 semana"
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
function Waveform({
  playing
}) {
  const bars = 26;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 2.5,
    height: 26
  }, children: Array.from({
    length: bars
  }, (_, i) => {
    const h = 5 + Math.sin(i * 0.85) * 5;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: playing ? "waveBar waveBarActive" : "waveBar", style: {
      width: 2.5,
      height: h + 3,
      borderRadius: 2,
      background: "linear-gradient(to top, #7C3AED, #EC4899)",
      opacity: playing ? 0.85 : 0.3,
      // @ts-ignore
      "--dur": `${0.45 + i * 0.03 % 0.4}s`,
      animationDelay: playing ? `${i * 41 % 420}ms` : "0ms",
      transformOrigin: "bottom",
      transition: "opacity 0.35s"
    } }, i);
  }) });
}
function useAnimateOnScroll() {
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
function MusicCard() {
  const [playing, setPlaying] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(31);
  const [liked, setLiked] = reactExports.useState(false);
  const [songIdx, setSongIdx] = reactExports.useState(0);
  const [volume, setVolume] = reactExports.useState(0.85);
  const [isMuted, setIsMuted] = reactExports.useState(false);
  const [shuffle, setShuffle] = reactExports.useState(false);
  const [repeat, setRepeat] = reactExports.useState(false);
  const rafRef = reactExports.useRef(null);
  const lastTRef = reactExports.useRef(null);
  const songs = [{
    title: "Para Helena, com amor",
    sub: "Aniversário · Sertanejo acústico",
    icon: Heart,
    bg: "linear-gradient(135deg,#7C3AED 0%,#EC4899 100%)",
    image: passionLightAsset
  }, {
    title: "Nosso primeiro olhar",
    sub: "Casamento · MPB intimista",
    icon: Music2,
    bg: "linear-gradient(135deg,#6366F1 0%,#7C3AED 100%)",
    image: romanceLightAsset
  }, {
    title: "30 anos de Júlia",
    sub: "Aniversário · Pop romântico",
    icon: Sparkles,
    bg: "linear-gradient(135deg,#EC4899 0%,#F59E0B 100%)",
    image: anniversaryLightAsset
  }];
  const song = songs[songIdx];
  const tick = (t) => {
    if (!lastTRef.current) lastTRef.current = t;
    const dt = (t - lastTRef.current) / 1e3;
    lastTRef.current = t;
    setProgress((p) => {
      const next = p + dt * (100 / 180);
      return next >= 99 ? 0 : next;
    });
    rafRef.current = requestAnimationFrame(tick);
  };
  reactExports.useEffect(() => {
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
  const seek = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setProgress(Math.max(0, Math.min(100, (e.clientX - r.left) / r.width * 100)));
  };
  const secs = Math.floor(progress / 100 * 195);
  const handleNext = () => {
    if (shuffle) {
      const randomIdx = Math.floor(Math.random() * songs.length);
      setSongIdx(randomIdx);
    } else {
      setSongIdx((i) => (i + 1) % songs.length);
    }
    setProgress(0);
  };
  const handlePrev = () => {
    setSongIdx((i) => (i - 1 + songs.length) % songs.length);
    setProgress(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orbit-spin-anim", style: {
      position: "absolute",
      width: 420,
      height: 420,
      borderRadius: "50%",
      border: "1px dashed rgba(124,58,237,.18)",
      animation: "orbitSpin 28s linear infinite",
      pointerEvents: "none"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      top: -5,
      left: "50%",
      marginLeft: -5,
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#7C3AED",
      boxShadow: "0 0 10px rgba(124,58,237,.7)"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "halo-glow-anim", style: {
      position: "absolute",
      width: 340,
      height: 340,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(124,58,237,.22) 0%, rgba(236,72,153,.14) 55%, transparent 75%)",
      filter: "blur(32px)",
      animation: "haloGlow 6s ease-in-out infinite",
      pointerEvents: "none"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "music-card-glass", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative",
        aspectRatio: "1",
        background: song.bg,
        overflow: "hidden"
      }, children: [
        song.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: song.image, alt: song.title, style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: (() => {
          const SongIcon = song.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(SongIcon, { className: "h-20 w-20 text-white opacity-80" });
        })() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 25% 20%, rgba(255,255,255,.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(0,0,0,.35) 0%, transparent 55%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "absolute",
          top: 12,
          left: 12,
          background: "#ffffff",
          borderRadius: 20,
          padding: "5px 12px",
          fontSize: 11,
          fontWeight: 800,
          color: "#4C1D95",
          letterSpacing: ".06em",
          border: "1px solid rgba(124,58,237,0.22)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 5,
          zIndex: 10
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#F59E0B] fill-[#F59E0B]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Melodia inesquecível" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLiked((l) => !l), style: {
          position: "absolute",
          top: 10,
          right: 12,
          background: "#ffffff",
          border: "1px solid rgba(124,58,237,0.22)",
          borderRadius: "50%",
          width: 34,
          height: 34,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "transform .2s, background .2s",
          zIndex: 10
        }, className: "hover:scale-110 active:scale-95 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4.5 w-4.5 transition-colors ${liked ? "fill-rose-500 text-rose-500" : "text-[#7C3AED]"}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 5
        }, children: songs.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSongIdx(i);
          setProgress(6);
        }, style: {
          width: i === songIdx ? 18 : 6,
          height: 6,
          borderRadius: 3,
          background: i === songIdx ? "#7C3AED" : "rgba(124,58,237,0.35)",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transition: "all .28s"
        } }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: "16px 16px 18px",
        background: "transparent"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          marginBottom: 12
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 15,
            fontWeight: 700,
            color: "#0F0A1E",
            marginBottom: 2,
            lineHeight: 1.3
          }, children: song.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: 11,
            color: "#4C4B63",
            fontWeight: 500,
            letterSpacing: ".02em"
          }, children: song.sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          height: 4,
          background: "#EDE9FE",
          borderRadius: 2,
          cursor: "pointer",
          position: "relative",
          marginBottom: 5
        }, onClick: seek, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progress}%`,
            background: "linear-gradient(90deg,#7C3AED,#EC4899)",
            borderRadius: 2,
            transition: "width .08s linear"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            position: "absolute",
            top: "50%",
            left: `${progress}%`,
            transform: "translate(-50%,-50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#7C3AED",
            boxShadow: "0 0 0 3px rgba(124,58,237,.25)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          color: "#6B5B8F",
          fontWeight: 600,
          marginBottom: 8
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            Math.floor(secs / 60),
            ":",
            String(secs % 60).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "3:15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginBottom: 12
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Waveform, { playing }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 4,
          marginBottom: 16
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShuffle((s) => !s), style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: shuffle ? "#7C3AED" : "#9CA3AF",
            transition: "color 0.2s, transform 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, className: "hover:scale-110 active:scale-95", title: "Aleatório", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffle, { className: "h-4 w-4", style: {
            filter: shuffle ? "drop-shadow(0 0 3px rgba(124,58,237,0.3))" : "none"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            flex: 1
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsMuted((m) => !m), style: {
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#7C3AED",
              display: "flex",
              alignItems: "center"
            }, className: "hover:scale-110", children: isMuted || volume === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "h-4 w-4 text-rose-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0", max: "1", step: "0.01", value: isMuted ? 0 : volume, onChange: (e) => {
              setVolume(Number(e.target.value));
              setIsMuted(false);
            }, style: {
              flex: 1,
              background: `linear-gradient(90deg, #7C3AED 0%, #7C3AED ${(isMuted ? 0 : volume) * 100}%, #EDE9FE ${(isMuted ? 0 : volume) * 100}%, #EDE9FE 100%)`
            }, className: "volume-slider" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRepeat((r) => !r), style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: repeat ? "#7C3AED" : "#9CA3AF",
            transition: "color 0.2s, transform 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, className: "hover:scale-110 active:scale-95", title: "Repetir", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "h-4 w-4", style: {
            filter: repeat ? "drop-shadow(0 0 3px rgba(124,58,237,0.3))" : "none"
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handlePrev, style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#6B5B8F",
            padding: 6
          }, className: "hover:text-primary active:scale-90 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipBack, { className: "h-5 w-5 fill-current" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "card-play", onClick: () => setPlaying((p) => !p), style: {
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#7C3AED,#EC4899)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 20px rgba(124,58,237,.35)"
          }, children: playing ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "h-5 w-5 fill-current text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-5 w-5 fill-current text-white ml-0.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleNext, style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#6B5B8F",
            padding: 6
          }, className: "hover:text-primary active:scale-90 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "h-5 w-5 fill-current" }) })
        ] })
      ] })
    ] }),
    [{
      icon: Gift,
      label: "Aniversários",
      style: {
        top: "4%",
        right: "-4%"
      },
      delay: "0s"
    }, {
      icon: Heart,
      label: "Casamentos",
      style: {
        top: "32%",
        left: "-10%"
      },
      delay: "1.2s"
    }, {
      icon: Sparkles,
      label: "Dia das Mães",
      style: {
        bottom: "20%",
        right: "-6%"
      },
      delay: "2.4s"
    }, {
      icon: Music2,
      label: "MPB · Sertanejo · Pop",
      style: {
        bottom: "5%",
        left: "-8%"
      },
      delay: ".6s"
    }].map(({
      icon: Icon,
      label,
      style,
      delay
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tag-float-anim", style: {
      position: "absolute",
      ...style,
      background: "rgba(255,255,255,.82)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(124,58,237,.18)",
      borderRadius: 100,
      padding: "6px 12px",
      fontSize: 12,
      fontWeight: 600,
      color: "#4C1D95",
      boxShadow: "0 4px 16px rgba(124,58,237,.1)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      animation: `tagFloat ${6 + Math.random() * 2}s ease-in-out infinite`,
      animationDelay: delay,
      display: "flex",
      alignItems: "center",
      gap: 6
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
    ] }, label))
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${heroBgLight})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.38,
      pointerEvents: "none",
      zIndex: 0
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob left-[-10%] top-[-10%] h-[480px] w-[480px] bg-primary/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob right-[-10%] top-[20%] h-[520px] w-[520px] bg-accent/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blob left-[20%] bottom-[-15%] h-[400px] w-[400px] bg-primary/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto max-w-6xl px-6 pt-8 pb-12 md:pt-10 md:pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-2 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center lg:items-start text-center lg:text-left w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-fade-in-up font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.08] tracking-tight text-foreground text-center lg:text-left mx-auto lg:mx-0", style: {
          fontFeatureSettings: '"ss01"',
          letterSpacing: "-0.03em",
          animationDelay: "0ms"
        }, children: [
          "Crie músicas",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm font-medium", children: "inesquecíveis e personalizadas" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "whitespace-nowrap", children: "para quem ama" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-fade-in-up mt-4 max-w-lg text-sm md:text-base text-[#4C4B63] font-medium leading-relaxed mx-auto lg:mx-0 text-center lg:text-left", style: {
          animationDelay: "150ms"
        }, children: "Transforme seus sentimentos em uma canção única feita por inteligência artificial. O presente perfeito para os momentos especiais." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in-up mt-6 flex w-full max-w-sm sm:max-w-md items-center gap-2.5 sm:gap-3 justify-center lg:justify-start mx-auto lg:mx-0", style: {
          animationDelay: "300ms"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/criar", className: "cta-main flex-1 lg:flex-initial inline-flex h-11 items-center justify-center gap-1 sm:gap-2 rounded-full bg-gradient-hero px-3 sm:px-8 text-[11px] sm:text-xs font-semibold text-primary-foreground shadow-warm text-center justify-center whitespace-nowrap", children: [
            "Criar música ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#exemplos", className: "cta-ghost flex-1 lg:flex-initial inline-flex h-11 items-center justify-center gap-1 sm:gap-2 rounded-full border border-border bg-card/85 px-3 sm:px-8 text-[11px] sm:text-xs font-semibold text-foreground backdrop-blur text-center justify-center whitespace-nowrap", children: "Ouvir exemplos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in-up mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-[#4C4B63] font-semibold mx-auto lg:mx-0", style: {
          animationDelay: "450ms"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 font-bold text-foreground", children: "4,9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+2.000 músicas entregues" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary" }),
            " ~30 min"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center", style: {
        minHeight: 520
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MusicCard, {}) })
    ] }) })
  ] });
}
function getFeatureIcon(feature) {
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
function LandingPage() {
  const [billingCycle, setBillingCycle] = reactExports.useState("mensal");
  const carouselRef = reactExports.useRef(null);
  useAnimateOnScroll();
  reactExports.useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let intervalId;
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (window.innerWidth >= 768) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll - 5) {
          el.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          el.scrollBy({
            left: 290,
            behavior: "smooth"
          });
        }
      }, 3500);
    };
    startAutoScroll();
    const handleInteraction = () => {
      clearInterval(intervalId);
      setTimeout(startAutoScroll, 5e3);
    };
    el.addEventListener("touchstart", handleInteraction, {
      passive: true
    });
    el.addEventListener("mousedown", handleInteraction);
    return () => {
      clearInterval(intervalId);
      el.removeEventListener("touchstart", handleInteraction);
      el.removeEventListener("mousedown", handleInteraction);
    };
  }, []);
  const getPriceLabel = (planId, cycle) => {
    if (cycle === "mensal") {
      if (planId === "essencial") return "R$ 49";
      if (planId === "completa") return "R$ 89";
      if (planId === "premium") return "R$ 149";
    } else {
      if (planId === "essencial") return "R$ 39";
      if (planId === "completa") return "R$ 71";
      if (planId === "premium") return "R$ 119";
    }
    return "";
  };
  const getBilledLabel = (planId, cycle) => {
    if (cycle === "anual") {
      if (planId === "essencial") return "Cobrado anualmente: R$ 468/ano";
      if (planId === "completa") return "Cobrado anualmente: R$ 852/ano";
      if (planId === "premium") return "Cobrado anualmente: R$ 1.428/ano";
    }
    return "pagamento único";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        header {
          background-color: rgba(255, 255, 255, 0.98) !important;
          border-bottom: 1px solid rgba(124, 58, 237, 0.08) !important;
          position: sticky !important;
          top: 0;
          z-index: 50;
        }
        @media (min-width: 768px) {
          header {
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            background-color: rgba(255, 255, 255, 0.72) !important;
          }
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

        /* Base class for MusicCard visual container */
        .music-card-glass {
          position: relative;
          z-index: 2;
          width: 304px;
          border-radius: 26px;
          box-shadow: 0 32px 72px rgba(124,58,237,.15), 0 4px 20px rgba(0,0,0,.04);
          overflow: hidden;
          animation: cardFloat 5.5s ease-in-out infinite .4s;
          font-family: inherit;
          border: 1px solid transparent;
          background: linear-gradient(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.65)) padding-box,
                      linear-gradient(135deg, rgba(124, 58, 237, 0.35) 0%, rgba(236, 72, 153, 0.18) 100%) border-box;
        }

        @media (min-width: 768px) {
          .music-card-glass {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            -webkit-box-reflect: below 10px linear-gradient(transparent, transparent 60%, rgba(255, 255, 255, 0.08) 85%, rgba(255, 255, 255, 0.16) 100%);
          }
        }

        /* Mobile Performance Optimizations */
        @media (max-width: 767px) {
          .tag-float-anim {
            animation: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(255, 255, 255, 0.95) !important;
          }
          .orbit-spin-anim, .halo-glow-anim {
            display: none !important;
          }
          .music-card-glass {
            animation: none !important;
            transform: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            background: rgba(255, 255, 255, 0.96) !important;
            border: 1px solid rgba(124, 58, 237, 0.15) !important;
          }
          .blob {
            filter: blur(60px) !important;
            opacity: 0.14 !important;
            transform: scale(0.65) !important;
          }
          .blob:first-of-type {
            display: none !important;
          }
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
          .music-card-glass, .tag-float-anim {
            animation: none !important;
            transform: none !important;
          }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "reveal-on-scroll border-y border-border/60 bg-secondary/40 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-6", children: occasions.map(({
      icon: Icon,
      label
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-foreground/80 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold whitespace-nowrap", children: label })
    ] }, label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "como-funciona", className: "reveal-on-scroll container mx-auto px-4 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Como funciona" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-[#4C4B63] font-semibold", children: "Três passos simples entre você e uma emoção para guardar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:translate-y-[-2px] transition duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-8 grid h-10 w-10 place-items-center rounded-full bg-gradient-hero font-display text-lg text-primary-foreground shadow-warm", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mt-4 h-8 w-8 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[#4C4B63] font-medium leading-relaxed", children: s.text })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "exemplos", className: "reveal-on-scroll bg-gradient-warm py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-12 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Exemplos para se inspirar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-[#4C4B63] font-semibold", children: "Pequenas amostras dos estilos que mais emocionam." })
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
      }].map((ex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-md transition duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ex.image, alt: ex.title, width: 800, height: 800, loading: "lazy", className: "h-full w-full object-cover transition duration-500 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Music2, { className: "h-3.5 w-3.5 text-primary" }),
            " Prévia em breve"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: ex.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4C4B63] font-semibold", children: ex.style }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-1/3 bg-gradient-hero" }) })
        ] })
      ] }, ex.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "planos", className: "reveal-on-scroll container mx-auto px-4 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-6 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Escolha o seu plano" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-[#4C4B63] font-semibold", children: "Valores transparentes e flexíveis de faturamento." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-semibold transition-colors duration-200 ${billingCycle === "mensal" ? "text-foreground" : "text-[#4C4B63]"}`, children: "Mensal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setBillingCycle((c) => c === "mensal" ? "anual" : "mensal"), className: "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none", "aria-label": "Toggle billing cycle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${billingCycle === "anual" ? "translate-x-5" : "translate-x-0"}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm font-semibold flex items-center gap-1.5 transition-colors duration-200 ${billingCycle === "anual" ? "text-foreground" : "text-[#4C4B63]"}`, children: [
          "Anual",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 px-2.5 py-0.5 text-xs font-bold text-[#F59E0B] shadow-[0_2px_8px_rgba(245,158,11,0.08)]", children: "Economize 20%" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: PLAN_LIST.map((plan) => {
        const currentPrice = getPriceLabel(plan.id, billingCycle);
        const billingPeriod = getBilledLabel(plan.id, billingCycle);
        const isPreferred = plan.highlight;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-3xl border p-8 transition-transform duration-300 ${isPreferred ? "animate-glow-card bg-card md:-translate-y-2" : "border-border bg-card shadow-soft hover:translate-y-[-2px]"}`, children: [
          isPreferred && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-hero px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-[#F59E0B] fill-[#F59E0B]" }),
            "Mais escolhido"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mt-2", children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4C4B63] font-semibold mt-1", children: plan.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-gradient-warm", children: currentPrice }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pb-2 text-sm text-[#4C4B63] font-bold", children: [
                "/ ",
                billingCycle === "mensal" ? "música" : "mês"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-bold mt-1 uppercase tracking-wider", children: billingPeriod })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-4 text-sm flex-1", children: plan.features.map((f) => {
            const FeatureIcon = getFeatureIcon(f);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureIcon, { className: "mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: f })
            ] }, f);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/criar", search: {
            plan: plan.id
          }, className: `mt-8 inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 ${isPreferred ? "bg-gradient-hero text-primary-foreground shadow-soft hover:scale-[1.02] active:scale-[0.98]" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"}`, children: [
            "Escolher ",
            plan.name
          ] })
        ] }, plan.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "reveal-on-scroll bg-secondary/40 py-24 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-14 max-w-2xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Quem ouviu, se emocionou" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0 scroll-smooth snap-x snap-mandatory", style: {
        WebkitOverflowScrolling: "touch"
      }, children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "w-[85vw] shrink-0 snap-center md:w-auto rounded-3xl border border-border bg-card p-7 shadow-soft flex flex-col justify-between hover:translate-y-[-2px] transition duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-base md:text-lg leading-relaxed text-foreground/90 font-medium italic", children: [
            '"',
            t.text,
            '"'
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 border-t border-border/80 pt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-11 w-11 place-items-center rounded-full text-xs font-bold text-white shadow-sm bg-gradient-to-tr ${t.gradient}`, children: t.initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#4C4B63] font-semibold", children: t.role })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-secondary px-2.5 py-1 rounded-full font-bold text-primary tracking-wide", children: t.date })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "reveal-on-scroll container mx-auto px-4 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-12 text-center font-display text-4xl md:text-5xl text-foreground", children: "Perguntas frequentes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors duration-200 open:bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer items-center justify-between font-display text-lg text-foreground hover:text-primary transition-colors", children: [
          f.q,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-primary transition-transform duration-200 group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[#4C4B63] font-medium leading-relaxed", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "reveal-on-scroll container mx-auto px-4 pb-28 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-[2.75rem] border border-white/15 bg-gradient-hero px-6 py-20 text-center shadow-warm md:px-16 md:py-28", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-[#F59E0B]" }),
          "Música feita só para vocês"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white md:text-6xl", children: [
          "Transforme suas lembranças em uma",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-clip-text text-transparent", style: {
            backgroundImage: "linear-gradient(90deg, #fff 0%, #ffe4f1 50%, #fff 100%)"
          }, children: "canção única" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl font-medium", children: "Conte sua história, escolha o estilo e nossa IA compõe — letra, melodia e voz — em poucos minutos. O presente mais emocionante que alguém pode receber." }),
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
  HeroSection,
  LandingPage as component
};

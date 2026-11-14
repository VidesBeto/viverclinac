import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Instagram, MapPin, Clock, Phone, Sparkles, HeartPulse, Activity, Flower2, Waves, Leaf, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viver Clínica | Estética, Bem-estar e Cuidado" },
      { name: "description", content: "Conheça a Viver Clínica. Cuidado, estética e bem-estar em um espaço pensado para você." },
      { property: "og:title", content: "Viver Clínica | Estética, Bem-estar e Cuidado" },
      { property: "og:description", content: "Cuidado e beleza em equilíbrio. Conheça a Viver Clínica." },
    ],
  }),
  component: Index,
});

const videoSrc = "/Camera_zooms_in_dark_screen_903b9352.mp4";
const treatments = [
  { n: "01", title: "Enzimas", desc: "Protocolos estéticos personalizados, sempre precedidos de avaliação profissional.", icon: Sparkles, tag: "Corporal" },
  { n: "02", title: "Microagulhamento", desc: "Cuidado facial com foco na renovação e na textura da pele.", icon: Activity, tag: "Facial" },
  { n: "03", title: "Drenagem linfática", desc: "Técnica manual que auxilia o fluxo linfático e promove sensação de leveza.", icon: Waves, tag: "Corporal" },
  { n: "04", title: "Limpeza de pele", desc: "Higienização profunda, extração e hidratação para o cuidado da pele.", icon: Flower2, tag: "Facial" },
  { n: "05", title: "Preenchimento labial", desc: "Realce de contorno e volume com atenção à harmonia e à naturalidade.", icon: HeartPulse, tag: "Estética" },
  { n: "06", title: "Peeling", desc: "Procedimentos de renovação cutânea definidos conforme avaliação.", icon: Leaf, tag: "Facial" },
  { n: "07", title: "Quiropraxia", desc: "Cuidado da saúde musculoesquelética e mobilidade com avaliação individual.", icon: Activity, tag: "Bem-estar" },
  { n: "08", title: "Reabilitação", desc: "Acompanhamento de reabilitação funcional conforme necessidade clínica.", icon: HeartPulse, tag: "Saúde" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;
    let raf = 0;
    let duration = 0;
    const onMetadata = () => { duration = video.duration || 0; setVideoReady(true); };
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const total = hero.offsetHeight - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        setProgress(p);
        if (duration > 0 && Number.isFinite(duration)) {
          const target = Math.min(Math.max(0, p * duration), Math.max(0, duration - 0.05));
          if (Math.abs(video.currentTime - target) > 0.045) video.currentTime = target;
        }
      });
    };
    video.addEventListener("loadedmetadata", onMetadata);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { cancelAnimationFrame(raf); video.removeEventListener("loadedmetadata", onMetadata); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="vc-site">
      <header className="vc-header">
        <a href="#inicio" className="vc-brand" onClick={closeMenu} aria-label="Viver Clínica - início">
          <img src="/Logo%20dourado%20Viverclin.png" alt="Viver Clínica" />
          <span>VIVER <i>CLÍNICA</i></span>
        </a>
        <button className="vc-menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "vc-nav is-open" : "vc-nav"}>
          <a href="#sobre" onClick={closeMenu}>A clínica</a><a href="#tratamentos" onClick={closeMenu}>Tratamentos</a><a href="#experiencia" onClick={closeMenu}>Nossa essência</a><a href="#contato" onClick={closeMenu} className="vc-nav-cta">Agendar avaliação <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section id="inicio" ref={heroRef} className="vc-hero-scroll">
        <div className="vc-hero-sticky">
          <video ref={videoRef} className="vc-hero-video" src={videoSrc} muted playsInline preload="auto" aria-label="Vídeo de apresentação da Viver Clínica" />
          <div className="vc-hero-shade" />
          <div className="vc-hero-grain" />
          <div className="vc-hero-content">
            <div className="vc-kicker"><span /> CUIDADO • ESTÉTICA • BEM-ESTAR</div>
            <h1>O seu cuidado<br/><em>em primeiro lugar.</em></h1>
            <p>Um espaço para se reconectar com o que faz você se sentir bem.</p>
            <a href="#tratamentos" className="vc-button vc-button-gold">Explore a clínica <ArrowDown size={16}/></a>
          </div>
          <div className="vc-hero-bottom"><span>VIVER CLÍNICA · CUIDADO EM CADA DETALHE</span><span>SCROLL PARA DESCOBRIR ↓</span></div>
          <div className="vc-scroll-progress"><span style={{ transform: `scaleX(${progress})` }} /></div>
        </div>
      </section>

      <section className="vc-intro" id="sobre">
        <div className="vc-section-label">01 — SOBRE A VIVER</div>
        <div className="vc-intro-grid">
          <h2>Beleza é se sentir<br/><em>bem consigo.</em></h2>
          <div><p>Na Viver Clínica, cada jornada começa com escuta e atenção. Acreditamos que cuidado de verdade respeita a individualidade e valoriza o equilíbrio entre saúde, estética e bem-estar.</p><a href="#contato" className="vc-text-link">Conheça nosso atendimento <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="vc-intro-image"><img src="/modelo1.jpg" alt="Imagem de apresentação da Viver Clínica" loading="lazy"/><div className="vc-image-caption">CUIDADO PENSADO PARA VOCÊ</div></div>
      </section>

      <section className="vc-treatments" id="tratamentos">
        <div className="vc-section-label">02 — NOSSOS CUIDADOS</div>
        <div className="vc-treatment-heading"><h2>Um cuidado para<br/><em>cada necessidade.</em></h2><p>Conheça as possibilidades e encontre, com orientação profissional, o cuidado mais adequado para você.</p></div>
        <div className="vc-treatment-grid">
          {treatments.map((item) => { const Icon = item.icon; return <article className="vc-treatment-card" key={item.n}><div className="vc-card-top"><span>{item.n}</span><Icon size={21} strokeWidth={1.3}/></div><div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.desc}</p></div><a href="#contato" aria-label={`Consultar sobre ${item.title}`}><ArrowUpRight size={18}/></a></article>; })}
        </div>
        <p className="vc-disclaimer">Os procedimentos são indicados após avaliação individual. A disponibilidade e a indicação dependem de análise profissional.</p>
      </section>

      <section className="vc-experience" id="experiencia">
        <div className="vc-experience-image"><img src="/unnamed_(4).webp_b9a90a0d.jpg" alt="Detalhe do ambiente e experiência da clínica" loading="lazy"/></div>
        <div className="vc-experience-copy"><div className="vc-section-label">03 — NOSSA ESSÊNCIA</div><h2>Um momento<br/>para <em>você.</em></h2><p>Mais do que um procedimento, queremos que cada visita seja uma experiência de acolhimento, confiança e atenção aos detalhes.</p><div className="vc-gold-rule"/><span>VIVER CLÍNICA · CUIDAR FAZ BEM</span></div>
      </section>

      <section className="vc-journey">
        <div className="vc-section-label">04 — COMO COMEÇAR</div><h2>Seu primeiro passo<br/><em>começa aqui.</em></h2>
        <div className="vc-steps"><div><b>01</b><h3>Entre em contato</h3><p>Conte o que você procura e tire suas dúvidas com nossa equipe.</p></div><div><b>02</b><h3>Agende sua avaliação</h3><p>Entenda as possibilidades de cuidado para o seu momento.</p></div><div><b>03</b><h3>Cuide de você</h3><p>Com orientação profissional, conheça o caminho indicado para você.</p></div></div>
      </section>

      <section className="vc-contact" id="contato"><div className="vc-contact-inner"><div className="vc-section-label">05 — VAMOS CONVERSAR?</div><h2>Seu cuidado<br/><em>começa com uma conversa.</em></h2><p>Fale com a Viver Clínica e saiba mais sobre nossos atendimentos.</p><a className="vc-button vc-button-gold" href="https://wa.me/5568999560017?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%20da%20Viver%20Cl%C3%ADnica." target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17}/></a></div><div className="vc-contact-mark">V</div></section>

      <footer className="vc-footer"><a href="#inicio" className="vc-footer-brand"><img src="/Logo%20dourado%20Viverclin.png" alt="Viver Clínica"/></a><p>Cuidado, estética e bem-estar.</p><a href="https://www.instagram.com/viverclinac/" target="_blank" rel="noreferrer"><Instagram size={17}/> @viverclinac</a><span>© {new Date().getFullYear()} Viver Clínica. Todos os direitos reservados.</span></footer>
      <a className="vc-floating-contact" href="https://wa.me/5568999560017?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Viver%20Cl%C3%ADnica." target="_blank" rel="noreferrer" aria-label="Fale com a Viver Clínica pelo WhatsApp"><Instagram size={20}/></a>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Instagram, MapPin, Clock, Phone, Sparkles, HeartPulse, Activity, Flower2, Waves, Leaf, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViverClin | Estética, Bem-estar e Cuidado" },
      { name: "description", content: "Conheça a ViverClin. Cuidado, estética e bem-estar em um espaço pensado para você." },
      { property: "og:title", content: "ViverClin | Estética, Bem-estar e Cuidado" },
      { property: "og:description", content: "Cuidado e beleza em equilíbrio. Conheça a ViverClin." },
    ],
  }),
  component: Index,
});

const treatments = [
  { n: "01", title: "Enzimas", desc: "Protocolos estéticos personalizados, sempre precedidos de avaliação profissional.", icon: Sparkles, tag: "Corporal" , image: "/8_fotos_procedimentos/01-enzimas.jpg" },
  { n: "02", title: "Microagulhamento", desc: "Cuidado facial com foco na renovação e na textura da pele.", icon: Activity, tag: "Facial" , image: "/8_fotos_procedimentos/02-microagulhamento.jpg" },
  { n: "03", title: "Drenagem linfática", desc: "Técnica manual que auxilia o fluxo linfático e promove sensação de leveza.", icon: Waves, tag: "Corporal" , image: "/8_fotos_procedimentos/03-drenagem-linfatica.jpg" },
  { n: "04", title: "Limpeza de pele", desc: "Higienização profunda, extração e hidratação para o cuidado da pele.", icon: Flower2, tag: "Facial", image: "/8_fotos_procedimentos/04-limpeza-de-pele.jpg" },
  { n: "05", title: "Preenchimento labial", desc: "Realce de contorno e volume com atenção à harmonia e à naturalidade.", icon: HeartPulse, tag: "Estética" , image: "/8_fotos_procedimentos/05-preenchimento-labial.jpg" },
  { n: "06", title: "Peeling", desc: "Procedimentos de renovação cutânea definidos conforme avaliação.", icon: Leaf, tag: "Facial" , image: "/8_fotos_procedimentos/06-peeling.jpg" },
  { n: "07", title: "Quiropraxia", desc: "Cuidado da saúde musculoesquelética e mobilidade com avaliação individual.", icon: Activity, tag: "Bem-estar" , image: "/8_fotos_procedimentos/07-quiropraxia.jpg" },
  { n: "08", title: "Reabilitação", desc: "Acompanhamento de reabilitação funcional conforme necessidade clínica.", icon: HeartPulse, tag: "Saúde" , image: "/8_fotos_procedimentos/08-reabilitacao.jpg" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".vc-treatment-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -6% 0px" });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const founderPhoto = document.querySelector<HTMLElement>(".vc-intro-image");
    if (!founderPhoto) return;

    const observer = new IntersectionObserver(([entry]) => {
      founderPhoto.classList.toggle("is-visible", entry?.isIntersecting ?? false);
    }, { threshold: 0.28 });

    observer.observe(founderPhoto);
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="vc-site">
      <header className="vc-header">
        <a href="#inicio" className="vc-brand" onClick={closeMenu} aria-label="ViverClin - início">
          <img src="/Logo%20dourado%20Viverclin.png" alt="ViverClin" />
          <span>ViverClin</span>
        </a>
        <button className="vc-menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "vc-nav is-open" : "vc-nav"}>
          <a href="#sobre" onClick={closeMenu}>A clínica</a><a href="#tratamentos" onClick={closeMenu}>Tratamentos</a><a href="#experiencia" onClick={closeMenu}>Nossa essência</a><a href="#contato" onClick={closeMenu} className="vc-nav-cta">Agendar avaliação <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section id="inicio" className="vc-hero">
        <div className="vc-hero-background">
          <img className="vc-hero-image" src="/foto001.jpg" alt="ViverClin — cuidado, estética e bem-estar" fetchPriority="high" />
        </div>
        <div className="vc-hero-shade" />
        <div className="vc-hero-content">
          <div className="vc-kicker"><span /> CUIDADO • ESTÉTICA • BEM-ESTAR</div>
          <h1><span>O seu cuidado</span><em>em primeiro lugar.</em></h1>
          <p>Um espaço para se reconectar com o que faz você se sentir bem.</p>
          <a href="#tratamentos" className="vc-button vc-button-gold">Explore a clínica <ArrowDown size={16}/></a>
        </div>
        <div className="vc-hero-bottom"><span>VIVERCLIN · CUIDADO EM CADA DETALHE</span><span>ROLE PARA DESCOBRIR ↓</span></div>
      </section>

      <section className="vc-intro" id="sobre">
        <div className="vc-section-label">01 — SOBRE A VIVER</div>
        <div className="vc-intro-grid">
          <h2>Beleza é se sentir<br/><em>bem consigo.</em></h2>
          <div><p>Na ViverClin, cada jornada começa com escuta e atenção. Acreditamos que cuidado de verdade respeita a individualidade e valoriza o equilíbrio entre saúde, estética e bem-estar.</p><a href="#contato" className="vc-text-link">Conheça nosso atendimento <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="vc-intro-image"><img src="/modelo1.jpg" alt="Ketylen Fernandes, CEO da ViverClin" loading="lazy"/><div className="vc-image-caption vc-founder-caption"><span>Ketylen Fernandes</span><small>CEO da ViverClin</small></div></div>
      </section>

      <section className="vc-treatments" id="tratamentos">
        <div className="vc-section-label">02 — NOSSOS CUIDADOS</div>
        <div className="vc-treatment-heading"><h2>Um cuidado para<br/><em>cada necessidade.</em></h2><p>Conheça as possibilidades e encontre, com orientação profissional, o cuidado mais adequado para você.</p></div>
        <div className="vc-treatment-grid">
          {treatments.map((item) => { const Icon = item.icon; const message = encodeURIComponent(`Olá! Gostaria de agendar ${item.title} na ViverClin. Poderiam me passar os horários disponíveis?`); return <a className="vc-treatment-card" key={item.n} href={`https://wa.me/5568999560017?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`Agendar ${item.title} pelo WhatsApp`}><img className="vc-treatment-image" src={item.image} alt={item.title} loading="lazy"/><div className="vc-card-top"><span>{item.n}</span><Icon size={21} strokeWidth={1.3}/></div><div className="vc-treatment-copy"><small>{item.tag}</small><h3>{item.title}</h3><p>{item.desc}</p></div><span className="vc-treatment-action"><span>Agendar pelo WhatsApp</span><ArrowUpRight size={18}/></span></a>; })}
        </div>
        <p className="vc-disclaimer">Os procedimentos são indicados após avaliação individual. A disponibilidade e a indicação dependem de análise profissional.</p>
      </section>

      <section className="vc-experience" id="experiencia">
        <div className="vc-experience-image"><img src="/Equipe.jpg" alt="Equipe da ViverClin" loading="lazy"/></div>
        <div className="vc-experience-copy"><div className="vc-section-label">03 — NOSSA ESSÊNCIA</div><h2>Um momento<br/>para <em>você.</em></h2><p>Mais do que um procedimento, queremos que cada visita seja uma experiência de acolhimento, confiança e atenção aos detalhes.</p><div className="vc-gold-rule"/><span>VIVERCLIN · CUIDAR FAZ BEM</span></div>
      </section>

      <section className="vc-journey">
        <div className="vc-section-label">04 — COMO COMEÇAR</div><h2>Seu primeiro passo<br/><em>começa aqui.</em></h2>
        <div className="vc-steps"><div><b>01</b><h3>Entre em contato</h3><p>Conte o que você procura e tire suas dúvidas com nossa equipe.</p></div><div><b>02</b><h3>Agende sua avaliação</h3><p>Entenda as possibilidades de cuidado para o seu momento.</p></div><div><b>03</b><h3>Cuide de você</h3><p>Com orientação profissional, conheça o caminho indicado para você.</p></div></div>
      </section>

      <section className="vc-contact" id="contato"><div className="vc-contact-inner"><div className="vc-section-label">05 — VAMOS CONVERSAR?</div><h2>Seu cuidado<br/><em>começa com uma conversa.</em></h2><p>Fale com a ViverClin e saiba mais sobre nossos atendimentos.</p><a className="vc-button vc-button-gold" href="https://wa.me/5568999560017?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%20da%20ViverClin." target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17}/></a></div><div className="vc-contact-mark">V</div></section>

      <footer className="vc-footer"><p>Cuidado, estética e bem-estar.</p><a className="vc-footer-address" href="https://www.google.com/maps/search/?api=1&query=R.+Floriano+Peixoto%2C+859+-+Centro%2C+Rio+Branco+-+AC%2C+69908-610" target="_blank" rel="noreferrer"><MapPin size={17}/><span>R. Floriano Peixoto, 859 - Centro, Rio Branco - AC, 69908-610</span></a><a className="vc-footer-instagram" href="https://www.instagram.com/viverclinac/" target="_blank" rel="noreferrer"><Instagram size={17}/> @viverclinac</a><span>© {new Date().getFullYear()} ViverClin. Todos os direitos reservados.</span></footer>
      <a className="vc-floating-contact" href="https://wa.me/5568999560017?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20ViverClin." target="_blank" rel="noreferrer" aria-label="Fale com a ViverClin pelo WhatsApp"><Instagram size={20}/></a>
    </main>
  );
}

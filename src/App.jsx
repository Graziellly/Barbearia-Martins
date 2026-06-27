import "./App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaCut,
  FaStar,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaMagic,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa";

const whatsapp = "5584999999999";

const services = [
  {
    title: "Corte Masculino",
    text: "Degradê, social, moderno ou clássico com acabamento detalhado.",
    price: "R$ 35",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Barba Premium",
    text: "Barba alinhada, navalhada e finalização com cuidado profissional.",
    price: "R$ 30",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Combo Completo",
    text: "Corte, barba e sobrancelha para renovar o visual por completo.",
    price: "R$ 65",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // NOVOS STATES
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [light, setLight] = useState({ x: "70%", y: "30%" });

  useEffect(() => {
    function handleScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;

      setScrolled(current > 40);
      setProgress((current / total) * 100);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMouseMove(e) {
    setLight({
      x: `${e.clientX}px`,
      y: `${e.clientY}px`,
    });
  }

  function agendar(servico = "um horário") {
    const texto = encodeURIComponent(
      `Olá! Quero agendar ${servico} na barbearia.`
    );

    window.open(`https://wa.me/${whatsapp}?text=${texto}`, "_blank");
  }

  return (
    <main>
      <header className={scrolled ? "navbar scrolled" : "navbar"}>
        <a className="brand" href="#">
          <span>BM</span>
          Barbearia Martins
        </a>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <a onClick={() => setMenuOpen(false)} href="#sobre">
            Sobre
          </a>
          <a onClick={() => setMenuOpen(false)} href="#servicos">
            Serviços
          </a>
          <a onClick={() => setMenuOpen(false)} href="#galeria">
            Galeria
          </a>
          <a onClick={() => setMenuOpen(false)} href="#contato">
            Contato
          </a>
          <button onClick={() => agendar()}>Agendar</button>
        </nav>

        <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <section className="hero">
        <div className="grain"></div>
        <div className="heroShape shape1"></div>
        <div className="heroShape shape2"></div>
        <div className="heroLine"></div>

        <motion.div
          className="heroText"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="eyebrow">
            <FaCut /> Barbearia masculina premium
          </p>

          <h1>
            Visual alinhado, atendimento de respeito e acabamento impecável.
          </h1>

          <p className="heroDescription">
            Cortes modernos, barba bem feita e uma experiência pensada para quem
            valoriza cuidado, presença e confiança no dia a dia.
          </p>

          <div className="heroActions">
            <button onClick={() => agendar()}>
              Agendar agora <FaChevronRight />
            </button>

            <a href="#servicos">Conhecer serviços</a>
          </div>
        </motion.div>

        <motion.div
          className="heroPanel"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="panelImage"></div>

          <div className="floatingCard top">
            <FaStar />
            <span>4.9 no Google</span>
          </div>

          <div className="floatingCard bottom">
            <FaClock />
            <span>Atendimento com hora marcada</span>
          </div>
        </motion.div>
      </section>

      <section className="features">
        <div>
          <FaShieldAlt />
          <h3>Ambiente organizado</h3>
          <p>Espaço limpo, confortável e preparado para receber bem.</p>
        </div>

        <div>
          <FaMagic />
          <h3>Acabamento profissional</h3>
          <p>Detalhes bem feitos em cada corte, barba e finalização.</p>
        </div>

        <div>
          <FaUsers />
          <h3>Atendimento próximo</h3>
          <p>Serviço personalizado para o estilo de cada cliente.</p>
        </div>
      </section>

      <section id="sobre" className="about">
        <motion.div
          className="aboutImg"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        <motion.div
          className="aboutText"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="label">Sobre a barbearia</p>
          <h2>Mais que um corte, uma experiência completa.</h2>

          <p>
            A Barbearia Martins nasceu para entregar um atendimento direto,
            profissional e bem feito. Aqui cada detalhe importa: o corte, a
            barba, o acabamento, o ambiente e a forma como o cliente é recebido.
          </p>

          <div className="aboutList">
            <span>Atendimento com horário marcado</span>
            <span>Cortes modernos e tradicionais</span>
            <span>Barba, sobrancelha e combos</span>
          </div>
        </motion.div>
      </section>

      <section id="servicos" className="services">
        <div className="sectionHeader">
          <p className="label">Serviços</p>
          <h2>Escolha o atendimento ideal</h2>
          <span>
            Serviços pensados para manter o visual alinhado em qualquer ocasião.
          </span>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <motion.article
              className="serviceCard"
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <img src={service.img} alt={service.title} />

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <strong>{service.price}</strong>
                <button onClick={() => agendar(service.title)}>Agendar</button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="numbers">
        <div>
          <strong>500+</strong>
          <p>clientes atendidos</p>
        </div>
        <div>
          <strong>4.9</strong>
          <p>avaliação média</p>
        </div>
        <div>
          <strong>8+</strong>
          <p>anos de experiência</p>
        </div>
        <div>
          <strong>100%</strong>
          <p>foco no acabamento</p>
        </div>
      </section>

      <section id="galeria" className="gallerySection">
        <div className="sectionHeader">
          <p className="label">Galeria</p>
          <h2>Trabalhos e estilos</h2>
          <span>Algumas referências de cortes, barba e acabamento.</span>
        </div>

        <div className="galleryGrid">
          {gallery.map((img, index) => (
            <motion.div
              className={`galleryItem item${index + 1}`}
              key={img}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <img src={img} alt="Estilo de corte" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <div>
          <p className="label">Avaliações</p>
          <h2>Quem passa por aqui, recomenda.</h2>
        </div>

        <div className="testimonialCards">
          <article>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              “Atendimento muito bom, corte bem alinhado e ambiente organizado.
              Recomendo demais.”
            </p>
            <strong>Lucas Almeida</strong>
          </article>

          <article>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              “Fiz corte e barba. O acabamento ficou excelente e o atendimento
              foi no horário.”
            </p>
            <strong>Rafael Souza</strong>
          </article>
        </div>
      </section>

      <section id="contato" className="cta">
        <p className="label">Agendamento</p>
        <h2>Pronto para renovar o visual?</h2>
        <p>
          Clique no botão abaixo e fale direto pelo WhatsApp para escolher o
          melhor horário.
        </p>

        <button onClick={() => agendar()}>
          <FaWhatsapp /> Chamar no WhatsApp
        </button>

        <div className="socialLinks">
          <a href="#">
            <FaInstagram /> Instagram
          </a>
          <a href="#">
            <FaMapMarkerAlt /> Localização
          </a>
        </div>
      </section>

      <footer>
        <div>
          <h2>Barbearia Martins</h2>
          <p>Corte, barba e acabamento profissional.</p>
        </div>

        <p>© 2026 - Todos os direitos reservados.</p>
      </footer>

      <button className="whatsappFixed" onClick={() => agendar()}>
        <FaWhatsapp />
      </button>
    </main>
  );
}
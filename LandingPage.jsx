import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = [
  {
    id: 1,
    style: "rose",
    title: "Mi razón de sonreír",
    content: [
      "A veces pienso en la blancura de tu piel, tan pura como la luz de la luna, y me sorprendo al notar que se sonroja al reír, como si el alba se asomara tímidamente al despertar. Es en ese rubor sincero donde se esconde la magia de un sentimiento puro.",
      "Me pierdo en la dulzura de tu voz, suave como el susurro del viento entre las hojas de un bosque encantado. Cada palabra tuya se desliza llevando consigo la calma de un atardecer y la ternura de un secreto compartido con la brisa.",
      "Contemplo el resplandor de tu cabello, rubio tan intenso que hasta los rayos del sol parecen detenerse a admirarlo. Es como si cada hebra absorbiera la luz del día, dibujando en el aire danzas luminosas que desafían la penumbra.",
      "Recuerdo aquella primera mirada en la que tus ojos se convirtieron en un océano azul, más cristalino y hermoso de lo que la imaginación podría pintar. En ellos me perdí, sumergiéndome en la inmensidad de un horizonte repleto de sueños y silencios cómplices.",
      "Y en un suspiro del tiempo, todas tus maravillas parecen entrelazarse: la blancura de tu piel que se enciende en tímido rubor al reír, la voz que acaricia el alma con la suavidad del viento y el cabello que, con su rubio incandescente, desafía la luz misma del sol. En cada detalle descubro un universo hecho de encanto y poesía."
    ],
  },
  {
    id: 2,
    style: "lavender",
    title: "Lo que siento por ti",
    content: [
      "Quisiera entender cómo cautivas al mundo, pero no me refiero a las personas. Cuando te veo, me doy cuenta de que el cielo cambia de color cada día para llamar la atención de quienes lo observan y evitar que descubran tu belleza.",
      "Pienso que el océano es azul para que nadie se detenga demasiado en el brillo de tus ojos. Imagino que las abejas hacen dulce la miel para que nadie quiera probar el azúcar que parece habitar en tus labios.",
      "Los pájaros cantan cada mañana intentando robarse la atención del mundo antes de que la melodía que es tu voz pronuncie una sola palabra al despertar. Incluso las flores parecen abrirse temprano para competir con la delicadeza que llevas contigo.",
      "Y mientras observo todas esas maravillas, termino preguntándome cómo cautivas al mundo. Entonces recuerdo que también me cautivaste a mí, y comprendo que algunas preguntas son demasiado hermosas para encontrarles respuesta."
    ],
  },
  {
    id: 3,
    style: "gold",
    title: "Mis promesas para ti",
    content: [
      "Cuando observo la forma en que enfrentas los días difíciles, pienso que hay algo en ti que las tormentas no logran comprender. Llegan con su viento, con su lluvia y con sus cielos grises, creyendo que podrán apagar tu luz, sin darse cuenta de que la llevas dentro y no sobre los hombros.",
      "Las montañas intentan enseñar con su grandeza aquello que tú ya sabes hacer: seguir avanzando cuando el camino se vuelve empinado. Porque incluso después de cada tropiezo, encuentro en ti una fuerza silenciosa que vuelve a levantarse con más valentía que antes.",
      "Cuando las dudas te visiten y el cansancio quiera convencerte de detenerte, recuerda que dentro de ti habita la misma perseverancia con la que el amanecer regresa cada mañana. No hay noche capaz de negociar con el sol su regreso al horizonte.",
      "Mientras tanto, guardo la esperanza de que algún día pueda caminar bajo tu manto, contemplando cómo todos esos anhelos que hoy persigues terminan convirtiéndose en la realidad que siempre mereciste."
    ],
  },
  {
    id: 4,
    style: "mint",
    title: "Lo que me enamora de ti",
    content: [
      "Me gusta imaginar que el universo no te entregó desafíos para detenerte, sino para revelar la grandeza que habita en tu alma. Del mismo modo que el océano se vuelve inmenso gracias a las incontables olas que lo moldean, cada dificultad ha ido construyendo en ti una fortaleza que ni siquiera alcanzas a dimensionar.",
      "Habrá momentos en los que las metas parezcan lejanas y el camino demasiado largo. Sin embargo, la luna también atraviesa noches oscuras antes de volver a mostrarse completa sobre el cielo.",
      "Ninguna estrella le pide permiso a la noche para brillar. Simplemente permanece allí, resistiendo la oscuridad hasta que alguien levanta la vista y descubre que nunca dejó de estar encendida. Quizás las personas se parezcan más a las estrellas de lo que imaginan.",
      "Y cuando el tiempo haya acomodado cada pieza en su lugar, espero tener la fortuna de caminar a tu lado, bajo el refugio de tus sueños cumplidos, admirando la manera en que convertiste cada obstáculo en una razón más para seguir adelante."
    ],
  },
  {
    id: 5,
    style: "blush",
    title: "Nuestro mundo",
    content: [
      "Hay personas que iluminan una habitación cuando entran en ella. Tú pareces iluminar incluso los lugares en los que no estás. No solo por la belleza que vive en tu mirada o por la dulzura que acompaña tu voz, sino por esa capacidad tan tuya de continuar avanzando incluso cuando nadie observa el esfuerzo que haces para seguir adelante.",
      "Los árboles soportan inviernos enteros sin perder la esperanza de la primavera. Permanecen firmes mientras el frío parece adueñarse del mundo, sabiendo que la vida sigue creciendo en silencio bajo la corteza.",
      "Quizás por eso me resulta imposible creer que los sueños puedan perderse para siempre. Algunas cosas simplemente necesitan tiempo, del mismo modo que una flor necesita estaciones enteras antes de abrir sus pétalos al sol.",
      "Y si alguna vez el camino se vuelve difícil, recuerda que existe alguien que confía profundamente en ti. Alguien que espera que el tiempo le conceda el privilegio de caminar bajo tu manto, compartir tus amaneceres y contemplar de cerca todas las maravillas que aún te esperan en el horizonte."
    ],
  },
  {
    id: 6,
    style: "sky",
    title: "Para cuando estés lejos",
    content: [
      "Hay algo que siempre me ha intrigado de las estrellas. A pesar de que la noche las rodea por completo, ninguna parece apresurarse a huir de la oscuridad. Permanecen allí, encendidas en silencio, como si comprendieran un secreto que el resto del universo aún no ha descubierto.",
      "Quizás por eso, cuando pienso en ti, termino mirando el cielo.",
      "No porque te parezcas a una estrella, sino porque compartes con ellas esa extraña costumbre de seguir brillando incluso cuando los días intentan volverse grises. Hay momentos en los que las nubes parecen adueñarse del horizonte y hacen creer que la luz ha desaparecido. Sin embargo, basta esperar un poco para descubrir que siempre estuvo allí.",
      "También me gusta pensar que los ríos nunca saben realmente a dónde llegarán cuando nacen entre las montañas. Simplemente avanzan. Atraviesan piedras, curvas imposibles y terrenos que parecen cerrarse ante ellos. Y aun así, encuentran el camino.",
      "Y yo espero que el tiempo me conceda el privilegio de acompañarte cuando descubras el tuyo. Caminar bajo tu manto, contemplar los paisajes que aún no existen y ver cómo cada sueño que hoy parece distante termina encontrando el camino hasta tus manos, igual que el mar encuentra siempre a sus ríos."
    ],
  },
];

export default function LandingPage() {
  const cardsRef = useRef([]);
  const [activeModal, setActiveModal] = useState(null);

  const activeLetter = activeModal === "wide"
    ? { 
        id: "wide", 
        title: "Mi carta más larga para ti", 
        style: "parchment", 
        content: [
          "Cuando contemplo un amanecer, suelo preguntarme por qué el sol insiste tanto en regresar. Después de todo, cada tarde desaparece detrás del horizonte sin ninguna garantía de que alguien lo esté esperando al día siguiente.",
          "Sin embargo, vuelve.",
          "Regresa una y otra vez, tiñendo el cielo de colores imposibles, como si supiera que la belleza más importante es aquella que no se rinde ante la noche.",
          "Esa idea siempre termina llevándome a ti.",
          "Porque hay algo admirable en la manera en que continúas avanzando, incluso en aquellos días en que nadie ve las batallas que libras en silencio. Como el amanecer, sigues apareciendo con luz propia, aunque la oscuridad haya intentado convencer al mundo de lo contrario.",
          "Quizás por eso me resulta imposible no creer en todo lo que aún te espera. Hay sueños que parecen dormidos, pero las semillas también parecen dormidas antes de convertirse en jardines.",
          "Y cuando llegue la estación en la que todo florezca, espero estar allí. Caminando bajo tu manto, observando cómo cada esfuerzo encuentra su recompensa y cómo cada ilusión que guardaste en silencio se convierte finalmente en parte del paisaje de tu vida."
        ]
      }
    : letters.find(l => l.id === activeModal);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing">
      {/* Hero */}
      <section className="landing-hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Cartas con amor</p>
          <h1 className="hero-heading">
            Para ti,
            <br />
            <em>mi princesa</em>
          </h1>
          <p className="hero-sub">
            Cada carta guarda un pedacito de lo que siento
          </p>
        </div>
        <div className="hero-scroll-hint">
          <span>Descubre las cartas</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="cards-section">
        <div className="cards-grid">
          {letters.map((letter, i) => (
            <article
              key={letter.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`letter-card card-${letter.style}`}
            >
              <div className="card-corner card-corner-tl" />
              <div className="card-corner card-corner-tr" />
              <div className="card-corner card-corner-bl" />
              <div className="card-corner card-corner-br" />

              <div className="card-inner closed-envelope" onClick={() => setActiveModal(letter.id)} style={{ cursor: "pointer", justifyContent: "center", minHeight: "300px" }}>
                 <div className="envelope-body" style={{ transform: "scale(0.85)" }}>
                   <div className="envelope-flap" />
                   <div className="envelope-front">
                     <div className="envelope-seal" style={{ textAlign: "center" }}></div>
                   </div>
                 </div>
                 <p style={{ marginTop: "2rem", color: "var(--ink-soft)", fontStyle: "italic", fontFamily: "var(--font-script)", fontSize: "1.2rem" }}>Toca para abrir</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Extra wide card */}
      <section className="wide-card-section">
        <article className="letter-card card-wide card-parchment">
          <div className="card-corner card-corner-tl" />
          <div className="card-corner card-corner-tr" />
          <div className="card-corner card-corner-bl" />
          <div className="card-corner card-corner-br" />
          
          <div className="card-inner closed-envelope" onClick={() => setActiveModal("wide")} style={{ cursor: "pointer", justifyContent: "center" }}>
             <div className="envelope-body" style={{ transform: "scale(1.2)" }}>
               <div className="envelope-flap" />
               <div className="envelope-front">
                 <div className="envelope-seal" style={{ textAlign: "center" }}></div>
               </div>
             </div>
             <p style={{ marginTop: "3rem", color: "var(--ink-soft)", fontStyle: "italic", fontFamily: "var(--font-script)", fontSize: "1.4rem" }}>Toca para abrir</p>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p className="footer-text">
          Hecho con amor by{" "}
          <strong>Stiven</strong>
        </p>
        <p className="footer-sub">Para la persona más especial de mi mundo</p>
      </footer>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div 
            className="modal-overlay" 
            onClick={() => setActiveModal(null)} 
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={`letter-card card-${activeLetter.style}`} 
              style={{ width: "100%", maxWidth: activeLetter.id === "wide" ? "800px" : "450px", maxHeight: "90vh", overflowY: "auto", position: "relative", cursor: "default", opacity: 1, transform: "none" }} 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button onClick={() => setActiveModal(null)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", fontSize: "2rem", cursor: "pointer", color: "var(--ink-soft)", zIndex: 10 }}>&times;</button>
              <div className="card-inner" style={{ minHeight: activeLetter.id === "wide" ? "600px" : "450px", paddingTop: "3rem" }}>
                <div className="card-ornament">— ✦ —</div>
                <div className="card-divider" />
                <div className="card-content" style={{ marginTop: "2rem", lineHeight: "1.8", color: "var(--ink)", fontSize: "1.1rem", textAlign: "justify", padding: "0 1rem" }}>
                  {activeLetter.content.map((p, idx) => (
                    <p key={idx} style={{ marginBottom: "1.5rem" }}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

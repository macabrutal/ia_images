import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Main";
import Galeria from "./Galeria";
import Header from "./Header";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showScroll, setShowScroll] = useState(false); // Estado para controlar visibilidad del botón
  const [visibleCards, setVisibleCards] = useState(3); // Inicialmente mostramos 3 tarjetas

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  // Función para manejar el scroll y mostrar el botón
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }

    // Detectar si se alcanzó el final de la página para cargar más tarjetas
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreCards();
    }
  };

  // Función para cargar más tarjetas
  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3); // Mostrar 3 tarjetas más
  };

  // Función para volver arriba de manera suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Detectar el scroll de la ventana
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardsData = [
    {
      image: "img13.png",
      source: "loRA: personalización de modelos",
      title: "Producto",
    },
    {
      image: "img14.png",
      source: "loRA: personalización de modelos",
      title: "Producto en ambientes",
    },
    {
      image: "img15.png",
      source: "loRA: personalización de modelos",
      title: "Persona",
    },
    { image: "img01.png", source: "MidJourney", title: "El Futuro" },
    { image: "img02.png", source: "MidJourney", title: "Misterio en Lavanda" },
    { image: "img03.png", source: "MidJourney", title: "Entrenando a la IA" },
    { image: "img1.png", source: "MidJourney", title: "Robot woman" },
    { image: "img3.png", source: "MidJourney", title: "Belleza tropical" },
    {
      image: "img7.png",
      source: "MidJourney",
      title: "Un Soplo de Color Pastel",
    },
    {
      image: "img11.png",
      source: "MidJourney",
      title: "Esencia de verde Kiwi",
    },
    {
      image: "img10.png",
      source: "MidJourney",
      title: "Encanto en humo de colores",
    },
    { image: "img12.png", source: "MidJourney", title: "Belleza frutal" },
    { image: "img4.png", source: "MidJourney", title: "Infancia de las cosas" },
    {
      image: "img9.png",
      source: "MidJourney",
      title: "Colores de la sabiduría",
    },
    { image: "img5.png", source: "MidJourney", title: "Felinos" },
    { image: "img6.png", source: "MidJourney", title: "Astronauta" },
    { image: "img8.png", source: "MidJourney", title: "La felicidad" },
    { image: "img2.png", source: "MidJourney", title: "Seda japonesa" },
  ];

  // Mostrar solo las tarjetas visibles
  const visibleCardsData = cardsData.slice(0, visibleCards);

  return (
    <div className="container">
      <Header />
      <Main />
      <Galeria cardsData={visibleCardsData} openModal={openModal} />
      <footer>
        <div className="footer_container">
          <p className="white">
            PROMPTEO | <span className="coral bold">AI AGENCY ✨</span>
          </p>
        </div>
      </footer>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/" +
                selectedCard.image.replace(".png", "b.png")
              }
              alt={selectedCard.title}
            />
            <div className="modal-text">
              <p>{selectedCard.source}</p>
              <h3>{selectedCard.title}</h3>
            </div>
          </div>
        </div>
      )}
      {/* Botón de scroll hacia arriba */}
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default App;

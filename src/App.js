import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Main";
import Galeria from "./Galeria";
import Header from "./Header";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showScroll, setShowScroll] = useState(false); // Estado para controlar visibilidad del botón

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
    // Datos de las tarjetas
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
    // ... (otros elementos)
  ];

  return (
    <div className="container">
      <Header />
      <Main />
      <Galeria cardsData={cardsData} openModal={openModal} />
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

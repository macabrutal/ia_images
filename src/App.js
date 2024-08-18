import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import Galeria from "./Galeria"; // Importar el nuevo componente

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  // Datos de las tarjetas (asegúrate de tener estos datos definidos)
  const cardsData = [
    {
      image: "img01.png",
      source: "MidJourney",
      title: "El Futuro",
    },
    {
      image: "img02.png",
      source: "MidJourney",
      title: "Mes de los gatos",
    },
    {
      image: "img03.png",
      source: "MidJourney",
      title: "Entrenando a la IA",
    },
    {
      image: "img1.png",
      source: "MidJourney",
      title: "Robot woman",
    },
    {
      image: "img2.png",
      source: "MidJourney",
      title: "Seda japonesa",
    },
    {
      image: "img3.png",
      source: "MidJourney",
      title: "Bajo el agua",
    },
    {
      image: "img4.png",
      source: "MidJourney",
      title: "Infancia de las cosas",
    },
    {
      image: "img5.png",
      source: "MidJourney",
      title: "Felinos",
    },
    {
      image: "img6.png",
      source: "MidJourney",
      title: "Astronauta",
    },
    {
      image: "img7.png",
      source: "MidJourney",
      title: "Envuelta en naturaleza",
    },
    {
      image: "img8.png",
      source: "MidJourney",
      title: "La felicidad",
    },
    {
      image: "img9.png",
      source: "MidJourney",
      title: "Colores de la sabiduría",
    },
  ];

  return (
    <div className="container">
      <Main /> {/* Incluir el componente Main */}
      <Galeria cardsData={cardsData} openModal={openModal} />{" "}
      {/* Usar el componente Galeria */}
      <footer>
        <div className="footer_container">
          <h3> Macarena Rodríguez Correa </h3>
          <p className="white">
            UI/UX Designer, Front-end &
            <span className="coral bold"> IA Lover ✨</span>.
          </p>
          <div className="video-wrapper">
            <img
              src={process.env.PUBLIC_URL + "/img/cerebro.png"}
              alt="Cerebro"
            />
          </div>
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
              <h2>{selectedCard.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

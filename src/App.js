import React, { useState } from "react";
import "./App.css";

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

  return (
    <div className="container">
      <header>
        <h1 className="degrade">Imágenes con IA</h1>
        <h3>
          Imágenes generadas con Inteligencia Artificial por una apasionada
          <span className="coral bold"> IA Lover</span>.
        </h3>
      </header>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index} onClick={() => openModal(card)}>
            <img
              src={process.env.PUBLIC_URL + "/img/" + card.image}
              alt={card.title}
            />
            <div className="card-content">
              <p>{card.source}</p>
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
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

const cardsData = [
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
    title: "Natural",
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
    title: "Felicidad",
  },
  {
    image: "img9.png",
    source: "MidJourney",
    title: "Colores",
  },
];

export default App;

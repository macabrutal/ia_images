import React from "react";

const Galeria = ({ cardsData, openModal }) => {
  return (
    <div>
      <header>
        <h2 className="degrade">Imágenes con IA</h2>
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
    </div>
  );
};

export default Galeria;

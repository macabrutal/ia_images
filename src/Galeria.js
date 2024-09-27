import React from "react";

const Galeria = ({ cardsData, openModal }) => {
  return (
    <div className="galeria_container">
      <h1>
        IMAGENES<span className="degrade"> CON IA GENERATIVA</span>
      </h1>

      <div className="card-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index} onClick={() => openModal(card)}>
            <img
              src={process.env.PUBLIC_URL + "/img/" + card.image}
              alt={card.title}
            />
            <div className="card-content">
              <p>{card.source}</p>
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;

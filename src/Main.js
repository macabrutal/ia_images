import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <h1>
        VIDEOS<span className="degrade"> CON IA GENERATIVA</span>
      </h1>

      <video
        className="video"
        src={process.env.PUBLIC_URL + "/img/robots_futuro.mp4"}
        width="1130"
        height="635"
        controls
        autoplay // Iniciar el video automáticamente
        muted // Añadido para evitar problemas con navegadores que bloquean el autoplay sin mute
      />

      <video
        className="video"
        src={process.env.PUBLIC_URL + "/img/healthcare.mp4"}
        width="1130"
        height="635"
        controls
        autoplay // Iniciar el video automáticamente
        muted // Añadido para evitar problemas con navegadores que bloquean el autoplay sin mute
      />
    </div>
  );
};

export default Main;

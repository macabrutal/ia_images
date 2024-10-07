import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <h1 className="degrade">Creatividad sin límites con IA</h1>

      <video
        className="video"
        src={process.env.PUBLIC_URL + "/img/reel-prompteo.mp4"}
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

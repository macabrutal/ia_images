import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <header>
        <h1 className="degrade">Creando con IA</h1>
      </header>

      <video
        src={process.env.PUBLIC_URL + "/img/robot-gen3"}
        width="1229"
        height="635"
        controls
        autoplay // Iniciar el video automáticamente
        muted // Añadido para evitar problemas con navegadores que bloquean el autoplay sin mute
      />
    </div>
  );
};

export default Main;

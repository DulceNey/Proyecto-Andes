import React from "react";
import *as estilos from './estilos'

const Cajonbarra = () => {
  return (
    <>
      <nav
       
        className={estilos.NAV}
      >
        <a
          href="#"
          value="a"
          className={estilos.A}
        >
          <h2 className="m-0">Inicio</h2>
        </a>
        <a
          href="#excursiones"
          value="a"
          className={estilos.A}
        >
          <h2 className="m-0">Excursiones</h2>
        </a>
        <a
          href="#conocenos"
          value="a"
          className={estilos.A}
        >
          <h2 className="m-0">Conocenos</h2>
        </a>
        <a
          href="#contacto"
          value="a"
          className={estilos.A}
        >
          <h2 className="m-0">Contacto</h2>
        </a>
      </nav>
    </>
  );
};

export default Cajonbarra;

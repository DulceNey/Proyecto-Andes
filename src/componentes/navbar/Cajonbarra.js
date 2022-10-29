import React from "react";
import *as estilos from './estilos'



const Cajonbarra = ({setVisible}) => {

 
  return (
    <>
      <nav
       
        className={estilos.NAV}
      >
        <a onClick={() => setVisible((visible) => !visible)}
          href="#inicio"
          className={estilos.A}
          >

          <h2 className="m-0" >Inicio</h2>
        </a>
        <a
          href="#excursiones"
          className={estilos.A}
          onClick={() => setVisible((visible) => !visible)}
        >
          <h2 className="m-0">Excursiones</h2>
        </a>
        <a
          href="#conocenos"
          className={estilos.A}
          onClick={() => setVisible((visible) => !visible)}
        >
          <h2 className="m-0">Conocenos</h2>
        </a>
        <a
          href="#contacto"
          className={estilos.A}
          onClick={() => setVisible((visible) => !visible)}
        >
          <h2 className="m-0">Contacto</h2>
        </a>
      </nav>
    </>
  );
};

export default Cajonbarra;


import React from "react";

const Cajonbarra = () => {
  return (
    <>
      <nav
        class="menu"
        className="flex-col w-full h-auto p-1 pt-2 m-0 mt-2 text-lg font-semibold tracking-widest text-center justify-center inline-flex transition-all duration-500 ease-out top-14 bg-gris-fondo2 text-stone-200 fixed right-0  "
      >
        <a
          href="#"
          className="p-3 text-lg no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl"
        >
          <h2 className="m-0">Inicio</h2>
        </a>
        <a
          href="#excursiones"
          className="p-3 no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl"
        >
          <h2 className="m-0">Excursiones</h2>
        </a>
        <a
          href="#conocenos"
          className="p-3 no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl"
        >
          <h2 className="m-0">Conocenos</h2>
        </a>
        <a
          href="#contacto"
          className="p-3 no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl"
        >
          <h2 className="m-0">Contacto</h2>
        </a>
      </nav>
    </>
  );
};

export default Cajonbarra;

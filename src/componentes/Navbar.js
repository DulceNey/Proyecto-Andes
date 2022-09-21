import React from "react";

const Navbar = () => {
  return (
    <>
      <body className="w-screen h-screen overflow-x-hidden font-semibold bg-naranja-palete text-md">
        <header class="header" className="fixed z-50 w-full h-16 p-1 bg-gris-fondo2 ">
          <section class="container" className="flex items- justify-between">
            <div class="logo" className="w-20 h-auto p-0 m-0">
              <img src="../multimedia/IMG-20220815-WA0006.jpg" ></img>
            </div>
            <nav class="menu" className="flex-col w-full h-auto p-1 pt-2 m-0 mt-2 text-lg font-semibold tracking-widest text-center justify-center inline-flex transition-all duration-500 ease-out top-14 bg-gris-fondo2 text-stone-200 fixed right-0  ">
              <a href="#" className="p-3 text-lg no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl"> 
                <h2 className="m-0">Inicio</h2>
              </a>
              <a href="#excursiones" className="p-3 no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl">
                <h2 className="m-0">Excursiones</h2>
              </a>
              <a href="#conocenos" className="p-3 no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl">
                <h2 className="m-0">Conocenos</h2>
              </a>
              <a href="#contacto" className="p-3 no-underline transition-all duration-400 ease-out cursor-default hover:opacity-75 hover:text-orange-400 hover:text-xl">
                <h2 className="m-0">Contacto</h2>
              </a>
            </nav>
           
            <button class="menu-btn" className="border-0 fill-naranja-palete inline-flex gap-3 p-2 pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"
              >
                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
              </svg>
              <svg class="none" xmlns="http://www.w3.org/2000/svg"  width="34" height="34"  viewBox="0 0 24 24" className="hidden" >
                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
              </svg>
              <svg class="carrito" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 576 512">
                <path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z">

                </path>
              </svg>
            </button>
            </section>
            
        </header>

        <section id="inicio">Inicio</section>
        <section id="excursiones">Excursiones</section>
        <section id="conocenos">Conocenos</section>
        <section id="contacto">Contacto</section>
      </body>
    </>
  );
};

export default Navbar;

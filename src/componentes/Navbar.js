import React from "react";

const Navbar = () => {
  return (
    <>
      <body className="w-screen h-screen overflow-x-hidden font-semibold bg-orange-300 text-md">
        <header class="header" className="fixed z-50 w-full h-16 p-1 bg-slate-400">
          <section class="container" className="flex items-center justify-between">
            <div class="logo" className="">
              <img src="../multimedia/IMG-20220815-WA0006.jpg"></img>
            </div>
            <button class="menu-btn" className="border-0 fill-orange-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
              >
                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
              </svg>
              <svg class="none" xmlns="http://www.w3.org/2000/svg"  width="36" height="36"      viewBox="0 0 24 24" className="hidden" >
                <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
              </svg>
            </button>
            </section>
            <nav class="menu" className="fixed right-0 inline-flex flex-col justify-center w-full h-auto p-3 m-0 text-lg font-semibold text-center transition-all duration-500 ease-out top-14 bg-neutral-600 text-stone-200">
              <a href="#" className="p-3 text-lg no-underline transition-all duration-300 ease-out cursor-default hover:opacity-75"> 
                <h2 className="m-0">Inicio</h2>
              </a>
              <a href="#excursiones" className="p-3 no-underline transition-all duration-300 ease-out cursor-default hover:opacity-75">
                <h2 className="m-0">Excursiones</h2>
              </a>
              <a href="#conocenos" className="p-3 no-underline transition-all duration-300 ease-out cursor-default hover:opacity-75">
                <h2 className="m-0">Conocenos</h2>
              </a>
              <a href="#contacto" className="p-3 no-underline transition-all duration-300 ease-out cursor-default hover:opacity-75">
                <h2 className="m-0">Contacto</h2>
              </a>
            </nav>
          
        </header>

        {/* <section id="inicio">Inicio</section>
        <section id="excursiones">Excursiones</section>
        <section id="conocenos">Conocenos</section>
        <section id="contacto">Contacto</section> */}
      </body>
    </>
  );
};

export default Navbar;

import React from "react";
import Boton from "../boton/Boton";
import { useState } from "react";

const Cards = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <figure
      class="card-conteiner"
      key={item.id}
      className=" max-w-130 h-150 border-solid border-4 border-amber-700 rounded-md gap-y-1 mx-3 mb-3 bg-slate-600 text-white flex-column md:w-5/6 md:h-full md:gap-1 "
    >
      <div class="card-body" className="h-130 p-1 m-2 md:max-h-100">
        <h3 className="text-lg font-bold mb-2 p-2 text-center capitalize tracking-wide md:text-xl  md:font-semibold lg:font-bold md:tracking-wider md:h-6 md:mb-4 md:mt-0 md:pt-1">
          {item.nombre}
        </h3>

        <img
          src={item.imagen}
          alt={item.nombre}
          className=" display-block w-screen h-auto p-3 mx-auto my-3 object-contain md:h-44 md:my-1 md:mx-0 md:p-1 "
        ></img>
      </div>
      <figcaption class="card-footer" className=" h-36 md:h-44 md:mb-0 md:pb-1">
        <div className="md:h-44 md:mb-4 lg:mb-4">
          <p className="font-medium text-lg text-justify px-4 pt-1 mt-2 mb-3  break-normal  md:mb-1 md:font-semibold md:text-lg">
            {item.textoCorto}
          </p>
        </div>
        <div class="container-boton">
          <button
            className="text-white w-26 h-25 bg-slate-400 border border-gray-300 focus:outline-none focus:ring-4  font-normal rounded-full text-sm px-4 py-2 m-2 ml-3 md:font-medium md:px-3 md:py-2 md:m-3 md:mt-4 md: mb-0 lg:mt-5"
            onClick={() => setVisible(true)}
          >
            Conoce Más
          </button>
        </div>
        {visible ? (
          <div class="modal-cajon-container " className="bg-zinc-200 fixed inset-0 z-50 opacity-100 ">
              <div class="modal-container" className="w-screen h-auto  bg-zinc-200  flex flex-col  pt-2 p-5 border-4 border-orange-700 rounded-xl ">
                <div class="modal" className=" max-h-500 max-w-600 flex flex-col text-lg text-zinc-600 mb-10">
                  <button onClick={() => setVisible(false)}>
                    <svg
                      className="float-right h-8 p-0 m-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24" >
                      <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
                    </svg>
                  </button>

                  <div className="w-auto h-full p-0 pb-4 m-0 mb-2 text-center font-bold border-b-2 border-stone-500 md:text-3xl md:font-semibold ">
                    {item.nombre}
                  </div>

                  <div className="w-auto h-auto px-1 font-medium text-center text-stone-500 indent-0  leading-6 md:leading-8 md:font-semibold md:text-2xl">
                    {item.texto}
                  </div>

                  <div className="">
                    <Boton />
                  </div>
                </div>
              </div>
           </div>          
        ) : null}
        <Boton />
      </figcaption>
    </figure>
  );
};

export default Cards;

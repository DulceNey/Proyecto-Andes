import React from "react";
import Boton from "../boton/Boton";
import { useState } from "react";

const Cards = ({item}) => {
  const [visible, setVisible] = useState(false);

  return (
    <figure
      key={item.id}
      className=" max-w-130 h-150 border-solid border-4 border-amber-700 rounded-md gap-y-1 mx-3 mb-3 bg-slate-600 text-white flex-column"
    >
      <div className="h-130 p-1 m-2">
        <h3 className="text-lg font-bold mb-2 p-2 text-center capitalize tracking-wide ">
           {item.nombre}
        </h3>

        <img
          src={item.imagen}
          alt={item.nombre}
          className=" display-block w-screen h-auto p-3 mx-auto my-3 object-contain   "
        ></img>
      </div>
      <figcaption className=" max-h-42 ">
        <p className="font-medium text-lg text-justify px-4 pt-1 mt-2 mb-3  break-normal">
          
          {item.textoCorto}
        </p>

        <button
          className="text-white w-26 h-25 bg-slate-400 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-3.5 py-2 m-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
          onClick={() => setVisible(true)}
        >
          Conoce Más
        </button>
{visible?
        <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50 opacity-100 ">
          <div className=" max-w-800 max-h-700">
            <div className="bg-white  flex flex-col  p-5 border-4 border-orange-700 rounded-xl ">
              <div className=" max-h-500 max-w-600 flex flex-col text-lg text-zinc-600 mb-10">
                <button onClick={() => setVisible(false)}>
                  <svg
                    className="float-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
                  </svg>
                </button>

                <div className="w-auto h-35 p-3 text-center font-bold border-b-2 border-stone-500">
                   {item.nombre}
                </div>

                <div className="w-auto max-h-600 p-4 font-medium text-center text-stone-500">
                  {item.texto} 
                </div>

                <div className="pt-3">
                  <Boton />
                </div>
              </div>
            </div>
          </div>
        </div> :null}

      <Boton />
      </figcaption>

    </figure>
  );
};

export default Cards;

import React from "react";
import Boton from "../boton/Boton";
import { useState } from "react";
import { shoppingReducer } from "../shoppingReducer";
import *as styles from "./styles";

const Cards = ({ item ,addToCart}) => {
  const [visible, setVisible] = useState(false);

  return (
    <figure
      
      key={item.id}
      className={styles.FIGURE}
    >   

      <div  className="h-auto p-1 m-2">
        <h3 className={styles.H3}>
          {item.nombre}
        </h3>

        <img
          src={item.imagen}
          alt={item.nombre}
          className={styles.DIV_IMG}
        ></img>
      </div>
      <figcaption  className=" h-auto md:h-90 md:mb-0 md:pb-1">
        <div className="md:h-44 md:mb-4 lg:mb-4">
          <p className={styles.PARRAFO}>
            {item.textoCorto}
          </p>
        </div>
        <div>
          <button
            className={styles.BOTON}
            onClick={() => setVisible(true)}
          >
            Conoce Más
          </button>
        </div>
        {visible ? (
          <div className="bg-zinc-200 overflow-y-auto fixed inset-0 z-50 opacity-100">
              <div className={styles.MODAL}>
              
                <div  className="w-auto flex flex-col text-lg text-zinc-600 mb-10">
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

                  <div className={styles.MODAL_TITULO}>
                    {item.nombre}
                  </div>

                  <div className={styles.MODAL_PARRAFO}>
                    {item.texto}

                    <spam className={styles.SPAM}>${item.precio}</spam>
                  </div>

                  <div className="mb-0 p-0">
                    <Boton  addToCart={addToCart}/>
                  </div>
                  
                </div>
              </div>
           </div>          
        ) : null}
       
      </figcaption>
    </figure>
  );
};

export default Cards;

import React from "react";
import { useState } from "react";
import * as styles from "./styles";
//import ModalContainer from "../carrito/ModalContainer";
import { TYPES } from "../carrito/acciones";

const Cards = ({ item, addToCart }) => {
  const [visible, setVisible] = useState(false);
  //const [visibleModal, setVisibleModal] = useState(false);
  const [visibleCart, setvisibleCart] = useState(false);

  return (
    <figure key={item.id} className={styles.FIGURE}>
      <div className="h-auto p-1 m-2">
        <h3 className={styles.H3}>{item.nombre}</h3>

        <img
          src={item.imagen}
          alt={item.nombre}
          className={styles.DIV_IMG}
        ></img>
      </div>
      <figcaption className="h-auto md:h-90 md:mb-0 md:pb-1">
        <div className="md:h-44 md:mb-4 lg:mb-4">
          <p className={styles.PARRAFO}>{item.textoCorto}</p>
        </div>
        <div>
          <button className={styles.BOTON} onClick={() => setVisible(true)}>
            Conoce Más
          </button>
        </div>

        {visible && (
          <div className="fixed inset-0 z-50 overflow-y-auto opacity-100 bg-zinc-200">
            {/* <div className={styles.MODAL}>
              <ModalContainer setVisible={setVisible} item={item} /> */}

              <div className="flex flex-col w-auto mb-10 text-lg text-zinc-600">
                <button>
                  <svg
                    onClick={() => setVisible(false)}
                    className="float-right h-8 p-0 m-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
                  </svg>
                </button>

                <div className={styles.MODAL_TITULO}>{item.nombre}</div>

                <div className={styles.MODAL_PARRAFO}>
                  {item.texto}

                  <spam className={styles.SPAM}>${item.precio}</spam>
                </div>

                <div className="p-0 mb-0">
                  <button
                    name="name"
                    onClick={() => {
                      addToCart(item);
                      visibleCart(true);
                    }}
                    type="button"
                    className="text-white bg-fondo-boton hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold tracking-wider rounded-lg text-md px-5 py-2.5 mx-3 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 float-right lg:py-2 lg:mx-3 lg:mt-0 lg:mb-1 lg:text-lg lg:font-medium "
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          // </div>
        )}
        {!visible && null}
      </figcaption>
    </figure>
  );
};

export default Cards;

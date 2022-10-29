import React, { useState } from "react";
import Navbar from "./componentes/Navbar";
import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "./componentes/carrito/ShoppingCart";
import ToursProvider from "./componentes/carrito/ToursProvider";
import Carruselcompleto from "./componentes/Componentes-Completos/Carruselcompleto";
import Oferta from "./componentes/Componentes-Completos/Oferta";
import Presentacion from "./componentes/Componentes-Completos/Presentacion";
import Front from "./componentes/Front";


function App() {
  const [carrito, setCarrito] = useState(false);

  return (
    <>
      <ToursProvider>
        <Navbar setCarrito={setCarrito} />
        {/* //esto separa el componente nav de card// */}
        <div className="h-20 md:h-14"></div>
        <Cardlist />
        {carrito && <ShoppingCart />}
      </ToursProvider>
      <Carruselcompleto/>
      <Oferta/>
      <Presentacion/>
      <Front/>
    </>
  )
  }

export default App
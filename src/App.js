import React, { useState } from "react";
import Navbar from "./componentes/navbar/Navbar";
import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "./componentes/carrito/ShoppingCart";
import ToursProvider from "./componentes/carrito/ToursProvider";
import Carruselcompleto from "./componentes/Componentes-Completos/Carruselcompleto";
import Oferta from "./componentes/Componentes-Completos/Oferta";
import Presentacion from "./componentes/Componentes-Completos/Presentacion";
import Front from "./componentes/Front";
import { Footer } from "./componentes/footer/Footer";

function App() {
  const [carrito, setCarrito] = useState(false);

  return (
    <>
      <ToursProvider>
        <Navbar setCarrito={setCarrito} />
        <Front />
        <Cardlist />
        {carrito && <ShoppingCart />}
        <Presentacion />
      </ToursProvider>

      <Carruselcompleto />
      <Oferta />

      <Footer />
    </>
  );
}

export default App;

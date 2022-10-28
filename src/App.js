import React, { useState } from "react";
import Navbar from "./componentes/Navbar";
import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "./componentes/carrito/ShoppingCart";
import ToursProvider from "./componentes/carrito/ToursProvider";
import Carruselcompleto from "./Components/Componentes-Completos/Carruselcompleto";
import Oferta from "./Components/Componentes-Completos/Oferta";
import Presentacion from "./Components/Componentes-Completos/Presentacion"

function App() {
  const [carrito, setCarrito] = useState(false);

  return (
    <>
      <ToursProvider>
        <Navbar setCarrito={setCarrito} />
        {/* //esto separa el componente nav de card// */}
        <div className="h-14"></div>
        <Cardlist />
        {carrito && <ShoppingCart />}
      </ToursProvider>
<Presentacion/>
<Oferta/>
<Carruselcompleto/>
    </>
  )
  }

export default App
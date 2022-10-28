import React, { useState } from "react";
import Navbar from "./componentes/Navbar";
import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "./componentes/carrito/ShoppingCart";
import ToursProvider from "./componentes/carrito/ToursProvider";


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

    </>
  )
  }

export default App
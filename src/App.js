import React from "react";
import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "./componentes/carrito/ShoppingCart";
import ToursProvider from "./componentes/carrito/ToursProvider";




function App() {

  

   return (
    <>
   <ToursProvider>
      <Cardlist />

    <ShoppingCart/> 

    </ToursProvider>
 
     
    </>

   
  );
}

export default App;

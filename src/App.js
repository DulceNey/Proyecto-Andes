import React,{useState}from "react";

import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "./componentes/carrito/ShoppingCart";
import ToursProvider from "./componentes/carrito/ToursProvider";




function App() {

  //const [carrito, setCarrito] = useState(false)

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

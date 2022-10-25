import React from "react";
import Cardlist from "./componentes/cards/Cardlist";
//import ShoppingCart from "../src/componentes/ShoppingCart";
import ToursProvider from "./componentes/ToursProvider";
import Navbar from "./componentes/Navbar";

import Carruselcompleto from "./Components/Componentes-Completos/Carruselcompleto";
function App() {
  
  return (
    <>
  
    <ToursProvider>
      <Navbar/>
      <Cardlist  /> 
      {/* <ShoppingCart/>  */}

    </ToursProvider>



        
    </>
  
  );
}

export default App;

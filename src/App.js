import React from "react";
//import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "../src/componentes/ShoppingCart";
import ToursProvider from "./componentes/ToursProvider";

function App() {
  
  return (
    <>
    <ToursProvider>

      {/* <Cardlist  /> */}
      <ShoppingCart/> 

    </ToursProvider>
        
    </>
  
  );
}

export default App;

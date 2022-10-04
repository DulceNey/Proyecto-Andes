import React from "react";
import { excursiones } from "../src/componentes/cards/data";
import Cardlist from "./componentes/cards/Cardlist";
import ShoppingCart from "../src/componentes/ShoppingCart";
import { shoppingInitialState,shoppingReducer } from './componentes/shoppingReducer'




function App() {


  return (
    <>
    
      <Cardlist data={excursiones} shoppingReducer={shoppingReducer}/>
      <ShoppingCart  />

    </>

   
  );
}

export default App;

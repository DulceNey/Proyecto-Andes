import React from "react";
import Cards from "./componentes/cards/Cards";
import { excursiones } from "../src/componentes/cards/data";




function App() {
  return (
    <>
    
      <Cards data={excursiones}/>

    </>

   
  );
}

export default App;

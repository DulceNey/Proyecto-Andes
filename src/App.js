import React from "react";
import { excursiones } from "../src/componentes/cards/data";
import Cardlist from "./componentes/cards/Cardlist";




function App() {


  return (
    <>
    
      <Cardlist data={excursiones}/>

    </>

   
  );
}

export default App;

import React from "react";
// import Cards from "./componentes/cards/Cards";
import { excursiones } from '../src/componentes/cards/data';
import Modal from '../src/componentes/modal/Modal'



function App() {
  return (
    <>
        
    {/* <Cards data={excursiones}/> */}

    <Modal info={excursiones}/>
        
    </>

   
  );
}

export default App;

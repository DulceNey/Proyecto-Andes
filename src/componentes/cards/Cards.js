import React from 'react';
import Boton from '../boton/Boton';
import Modal from '../modal/Modal';
import { excursiones } from "../cards/data";
import { useState } from 'react';

const Cards = ({data}) => {

const [visible, setVisible] = useState(false)


  return (
    <div className="w-screen h-100% flex flex-row flex-wrap justify-content  bg-yellow-500">       
      {data.map ((item, index) => (

      <figure key={index} className=" max-w-130 h-150 border-solid border-4 border-amber-700 rounded-md gap-y-1 mx-3 mb-3 bg-slate-600 text-white flex-column" >    
        <div className="h-130 p-1 m-2">
            <h3 className="text-lg font-bold mb-2 p-2 text-center capitalize tracking-wide "> {item.nombre} </h3>
    
          <img src={item.imagen} alt={item.nombre} className=" display-block w-screen h-auto p-3 mx-auto my-3 object-contain   "></img>
        </div> 
        <figcaption className=" max-h-42 ">
          <p className="font-medium text-lg text-justify px-4 pt-1 mt-2 mb-3  break-normal"> {item.textoCorto}</p>
        
         
        <button  className="text-white w-26 h-25 bg-slate-400 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-3.5 py-2 m-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 " onClick={()=> setVisible (true)} >Conoce Más </button>

        {visible? <Modal info={excursiones} setvisible={setVisible}/> : null}
              
      </figcaption>
            
        <Boton />
        
         
         
      </figure>
    ))}
  </div>
  );
}
   
export default Cards
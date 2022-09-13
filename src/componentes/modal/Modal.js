import React from 'react';
import Boton from '../boton/Boton';



const Modal = ({info, setVisible}) => {
  return (
<>
<div className='bg-zinc-200 opacity-80 fixed inset-0 z-50  '>
    <div className=' max-w-800 max-h-700'>
        <div className='bg-white  flex flex-col  p-5 border-4 border-orange-700 rounded-xl '>
            <div className=' max-h-500 max-w-600 flex flex-col text-lg text-zinc-600 mb-10'>
                <button onClick={()=> setVisible(false)} > 

                    <svg className='float-right'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                    <path  d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" /> </svg> 
            
                </button>

                <div className='w-auto h-35 p-3 text-center font-bold border-b-2 border-stone-500'>
                    titulo {info.titulo}
                </div>
                
                <div className='w-auto max-h-600 p-4 font-medium text-center text-stone-500'>{info.texto} descripcion extensa de excursión
                    
                </div>

                <div className='pt-3'>
                       <Boton/>
                </div>

            </div>
        </div>
    </div>
</div>
 </>
)
}

export default Modal
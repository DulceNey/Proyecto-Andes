import React from 'react'
import ShoppingCart from './ShoppingCart';
import { shoppingInitialState } from './shoppingReducer';


const ModalContainer = ({setVisible,data}) => {
 
  return (
    <>
    <div className='bg-orange-900  w-screen h-full p-0 m-0 relative '>
      <div className='float-right pr-8'>
        <svg onClick={()=>{setVisible(false)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
        </svg>
      </div>
      <div>
        <ShoppingCart data={data}  className="float-right" /> 
      </div>
    </div>
    </>
  )
}

export default ModalContainer
import React from 'react'
import ShoppingCart from './ShoppingCart'

const ModalContainer = ({setVisibleModal}) => {
  return (
    <>
    <div className='bg-slate-100 w-5/6 h-screen float-right'>

      <svg  onClick={()=>setVisibleModal(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
      </svg>
    
    <ShoppingCart/>
    </div>
    </>
  )
}

export default ModalContainer
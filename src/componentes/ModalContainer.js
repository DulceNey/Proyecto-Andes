import React from 'react'
import { useState } from 'react'
import ItemsCarrito from './ItemsCarrito'
import ShoppingCart from './ShoppingCart'

const ModalContainer = () => {
  return (
    <>
    <div className='bg-red-600 w-screen h-screen flex justify-end'>
    <ShoppingCart/>
    </div>
    </>
  )
}

export default ModalContainer
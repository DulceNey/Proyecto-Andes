

import React from 'react'

const CartItem = ({data, deleteFromCart}) => {
  const   {id,  name, price, quantity} = data;
  return (
    <div className='box-content w-32 h-32 p-4 border-sky-400'>
        <h4>{name}</h4>
        <h5>$ {price} {quantity} = $ {price * quantity}</h5>
        <button onClick={() => deleteFromCart (id)}>eliminar uno</button>
        <button  onClick={() => deleteFromCart(id, true)}>eliminar todos</button>
    </div>
  )
}

export default CartItem
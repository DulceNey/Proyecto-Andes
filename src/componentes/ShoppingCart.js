import React from 'react';
import { TYPES } from './acciones';
import { useReducer } from 'react';
import { shoppingInitialState,shoppingReducer } from './shoppingReducer';
import Productos from './Productos';
import ItemsCarrito from './ItemsCarrito';

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState, )

    const addToCart = (id)=>{
      dispatch({type:TYPES.ADD_TO_CART, payload:id})

};
    const deleteFromCart = (id)=>{};

    const clearCart = ()=>{};

    const {products,cart}=state
  return (
    <>
      <div>
        <h2>Carrito de compras</h2>
        <h3>Productos</h3>
     </div>

     <div className='flex flex-auto justify-around gap-12  bg-orange-500 border-2'>
        {products.map(product => <Productos key={product.id} data={product} addToCart={addToCart}/>)}
     </div>
     <h3>carrito</h3>
     <div className='w-full h-auto flex flex-auto justify-around gap-12 bg-orange-300 border-2'>
        {cart.map((item,index)=><ItemsCarrito key={index} data={item} deleteFromCart={deleteFromCart}/>)}
     </div>
     <button onClick={()=>clearCart()} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">limpiar Carrito</button>

   

    </>
  )
}

export default ShoppingCart
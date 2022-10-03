import React from 'react';
import { TYPES } from './acciones';
import { useReducer} from 'react';
import { shoppingInitialState,shoppingReducer } from './shoppingReducer';
import Productos from './Productos';
import ItemsCarrito from './ItemsCarrito';


const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState);
    const {products,cart}=state;

    
      const addToCart = (id)=>{
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
        
      };
      const deleteFromCart = (id,all=false)=>{
        if (all) {
          dispatch({type:TYPES.REMOVE_ALL_PRODUCTS, payload:id})
        } else {
          
          dispatch({type:TYPES.REMOVE_ONE_PRODUCT, payload:id})
        }
      };
           
      
      
  return (
    <>
      
     <div className='flex flex-auto justify-around gap-12  bg-orange-500 border-2'>
        {products.map(product => <Productos key={product.id} data={product} addToCart={addToCart}/>)}
     </div>
     
     <h3>carrito</h3>

     <div className='w-4/6 h-screen flex-1 flex-grow flex-col justify-center items-center  bg-slate-200 border-2'>
        {cart.map((item,index)=><ItemsCarrito key={index} data={item} deleteFromCart={deleteFromCart} addToCart={addToCart}/>)}
     </div>

  

    </>
  )
}

export default ShoppingCart
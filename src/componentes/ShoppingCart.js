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
      <div className='bg-green-600 w-9/12 h-screen md:w-4/6 lg:w-2/4'>

      <div className='bg-slate-200 h-6 float-right '>
    <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
    <path  d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
    </svg>
    </div>

     <div className='w-min h-fit flex flex-auto justify-around gap-12  bg-orange-500 border-2'>
        {products.map(product => <Productos key={product.id} data={product} addToCart={addToCart}/>)}
     </div> 


     <div className='w-full h-full flex-1 flex-grow flex-col justify-center items-center  bg-slate-200 border-2'>
        {cart.map((item,index)=><ItemsCarrito key={index} data={item} deleteFromCart={deleteFromCart} addToCart={addToCart}/>)}
     </div>

     </div>

    </>
  )
}

export default ShoppingCart
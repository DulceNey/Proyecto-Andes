import React from 'react';
import { TYPES } from './acciones';
import { useEffect } from 'react';
import Productos from './Productos';
import ItemsCarrito from './ItemsCarrito';
import { useToursContext } from './ToursContext';
import axios from 'axios';



const ShoppingCart =() => {

  const {state,dispatch} =useToursContext();


  const updateState = async () =>{

const productsURL = "http://localhost:8080/products";
const cartURL = "http://localhost:8080/cart";
const resProducts = await axios.get(productsURL);
const resCart = await axios.get(cartURL);
const ProductList = await resProducts.data
const newCartItem = await resCart.data

dispatch ({type:TYPES.READ_STATE , payload: [ProductList , newCartItem]})

}

useEffect (() =>{
  updateState()

},[]);
    
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
        {cart.map((item,index)=><ItemsCarrito key={index} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart} />)}
     </div>

  

    </>
  )
}

export default ShoppingCart
import React, { useState } from 'react';
import { TYPES } from './acciones';
import { useEffect } from 'react';
import Productos from './Productos';
import ItemsCarrito from './ItemsCarrito';
import { useToursContext } from './ToursContext';
import axios from 'axios';
import { shoppingInitialState } from './shoppingReducer';

//export const PostCarrito = function(){saveData()};

const ShoppingCart =({setvisibleCart,data}) => {
  
  const {state,dispatch} =useToursContext();
  const {products,cart}=state;
  const [db, setDb] = useState(shoppingInitialState);
   
   const saveData = async(data) =>{
   
  const options ={
    method:"POST",
    headers:{ "content-type":"application/json"},
    data: JSON.stringify(data)
   };
  
  
  const res = await axios("http://localhost:8080/cart",options)
  const productCarrito = await res.data
  
  
    setDb ([
      ...db , 
      productCarrito]);
    }   
  
 const getState = async (data) =>{

  const productsURL = "http://localhost:8080/products";
  const cartURL = "http://localhost:8080/cart";
  const resProducts = await axios.get(productsURL);
  const resCart = await axios.get(cartURL);
  const ProductList = await resProducts.data
  const newCartItem = await resCart.data
  
  dispatch ({type:TYPES.READ_STATE , payload: [ProductList , newCartItem]})
  
  }
  
  useEffect (() =>{
   getState()
//  saveData()
  },[]);
      


  const updateData = async (data)=>{

    // const endpoint=`http://localhost:8080/cart/${data.id}`;
    
    // let options = {
    //   method:"PUT",
    //   headers:{"content-type":"application/json"},
    //   data: JSON.stringify(data)
    // }
    
    // const res = await axios(endpoint , options),
    // producto=await res.data;
    
    //  dispatch({type:TYPES.ADD_TO_CART, type:TYPES.REMOVE_ONE_PRODUCT, payload:[producto.id]})
    //  
  }
    // const deleteData = async(id)=>{
    
    //    const endpoint=`http://localhost:8080/cart${id}`;
    
    //       const options = {
    //         method:"DELETE",
    //         headers:{"content-type":"application/json"},
            
    //       };
    
    //       const res = await axios(endpoint , options),
    //       productos=await res.data;
    
    //       // setDb{[
    //       //     ...db,
    //       //    productos
    //       //   ]}
    //     }
       





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
    <div className='bg-yellow-500 w-5/6 h-screen  md:w-2/5  flex-col flex-nowrap item-center justify-center float-right'>

   {/* <svg  onClick={()=>{setvisibleCart(false)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
        </svg>        
    <div className='flex flex-auto justify-around gap-12  bg-orange-500 border-2'>
        {products.map(product => <Productos key={product.id} data={product} addToCart={addToCart}/>)}
     </div> 
     <h3>carrito</h3> */}

     {/* {
      data.lengt=== 0 && (
        alert("Tu carrito esta vacio")
      )
     }
     {
      data.lengt !== 0 && (

        cart.map((item,index)=><ItemsCarrito key={index} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart}/>)
      )
     } */}

     <div >
        {cart.map((item,index)=><ItemsCarrito key={index} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart} saveData={saveData}/>)}
     </div>

     </div>

    </>
  )
}

export default ShoppingCart
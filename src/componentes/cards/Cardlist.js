import {TYPES} from '../carrito/acciones';
import React,{useEffect} from 'react';
import Cards from './Cards';
import *as  styles from './styles';
import { useToursContext } from '../carrito/ToursContext';
import axios from 'axios';



const Cardlist = () => {
  const {state,dispatch} =useToursContext();
  const {products}=state;
  
  const getState = async (data) => {
    
    const productsURL = "http://localhost:8080/products";
    const cartURL = "http://localhost:8080/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const ProductList = await resProducts.data;
    const newCartItem = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [ProductList, newCartItem] });

  };
//este useeffect viene de prueba2//
  useEffect(() => {
    getState();
  }, []);

const addToCart = async (data) => {
    data.id = Date.now();

    data["cantidad"] = 1;

    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    };

    await axios("http://localhost:8080/cart", options);

    getState();
  };



  return (
    <>
     <div className='text-stone-700 dark:text-slate-300 bg-slate-300 dark:bg-slate-900 font-semibold text-3xl text-center tracking-wide md:text-4xl md:pb-10'>Conocé nuestros Tours</div>
      <div className={styles.CARDLIST_CONT}>
       
       {products.map((item) => (
          <Cards
            key={item.id}
            item={item}
            addToCart={addToCart}
          >          
          </Cards>
          
        ))}
       
      </div>
    </>
  )
}

export default Cardlist

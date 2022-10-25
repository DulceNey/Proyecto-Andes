import React from 'react';
import {TYPES} from '../carrito/acciones';
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

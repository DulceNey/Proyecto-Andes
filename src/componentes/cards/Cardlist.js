import { TYPES } from '../acciones';
import React from 'react';
import Cards from './Cards';
import *as  styles from './styles';
import { useToursContext } from '../ToursContext';

const Cardlist = ({props}) => {
  const {state,dispatch} =useToursContext();
  const {products,cart}=state;

    const addToCart = (id)=>{
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
        
      };
      const deleteFromCart = (id,all=false)=>{
        if (all) {
          dispatch({type:TYPES.REMOVE_ALL_PRODUCTS, payload:id})
        } else {
          
          dispatch({type:TYPES.REMOVE_ONE_PRODUCT, payload:id})
        };
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

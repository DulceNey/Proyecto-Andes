import React from 'react';
import Cards from './Cards';
import *as  styles from './styles';



const Cardlist = ({data,shoppingReducer}) => {

  const {addToCart}=shoppingReducer

  return (
    <>
      <div className={styles.CARDLIST_CONT}>
        {data.map((item) => (
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

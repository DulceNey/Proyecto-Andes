import React from 'react';
import Cards from './Cards';
import *as  styles from './styles';

const Cardlist = ({data}) => {
  return (
    <>
      <div className={styles.CARDLIST_CONT}>
        {data.map((item) => (
          <Cards
            key={item.id}
            item={item}
          >
          
          </Cards>
        ))}
      </div>
    </>
  )
}

export default Cardlist

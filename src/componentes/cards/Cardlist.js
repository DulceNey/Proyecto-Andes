import React from 'react';
import Cards from './Cards';

const Cardlist = ({data}) => {
  return (
    <>
      <div className="w-screen h-100% flex flex-row flex-wrap justify-content  bg-yellow-500">
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

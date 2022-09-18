import React from 'react';
import Cards from './Cards';

const Cardlist = ({data}) => {
  return (
    <>
      <div class="container" className="w-screen h-full flex flex-row flex-wrap justify-content  bg-neutral-300 overflow-hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 md:px-4 md:py-3 overflow-y-hidden">
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

import React from 'react';
import { useReducer } from 'react';
import { shoppingInitialState,shoppingReducer } from './shoppingReducer';
import ToursContext from './ToursContext';


const ToursProvider = ({children}) => {
     const [state, dispatch] = useReducer(shoppingReducer,shoppingInitialState);
     
     const material={
        state,
        dispatch,
       
     }
     
    return (
<ToursContext.Provider value={material}>
  {children}
</ToursContext.Provider>

  )

}

export default ToursProvider
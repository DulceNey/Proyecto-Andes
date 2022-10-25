import React from 'react'
import { createContext,useContext } from 'react';

const ToursContext=createContext();

export function useToursContext() {
 return  useContext(ToursContext);
  
}

export default ToursContext
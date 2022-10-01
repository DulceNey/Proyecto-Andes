import { TYPES } from "./acciones"

export const shoppingInitialState={
    products:[
    {
        id:1, 
        nombre:"Minitrekking",
        precio:28000

    },
    {
        id:2,
        nombre:"Excursion nautica",
        precio:8500
    },
    {
        id:3,
        nombre:"Pasarelas",
        precio:7000
    },
    {
        id:4,
        nombre:"Cabalgatas",
        precio:13000
    
    }
],
cart:[]
    
}
export function shoppingReducer(state,acciones) {
    switch (acciones.type) {
        case TYPES.ADD_TO_CART:{
            let newItem=state.products.find(product=>product.id===acciones.payload)
console.log(newItem)
            return{
                ...state,
                cart:[...state.cart,newItem]
            }
        };

        case TYPES.REMOVE_ONE_PRODUCT:{};

        case TYPES.REMOVE_ALL_PRODUCTS:{};

        case TYPES.CLEAR_CART:{};
            
            
        default:
            return state;
    }
}
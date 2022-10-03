import { TYPES } from "./acciones";
import axios from "axios";


export const shoppingInitialState={
    products:[
            {
                id:1,
                nombre: "Minitrekking",
                precio:"28.000"
        
            },
            {
                id:2,
                nombre:"Excursion nautica",
                precio:"8.500"
            },
            {
                id:3,
                nombre:"Pasarelas",
                precio:"7.000"
            },
            {
                id:4,
                nombre:"Cabalgatas",
                precio:"13.000"
            
            }
        ],

    cart:[ ],

}

  




  
export function shoppingReducer(state,acciones) {
    switch (acciones.type) {
        case TYPES.ADD_TO_CART:{
            let newItem=state.products.find(product=>product.id===acciones.payload)

            const itemCargado=state.cart.find(item=> item.id===newItem.id);

            return itemCargado 
            ?{
                ...state,
                cart:state.cart.map(item=>
                    item.id===newItem.id
                    ?{...item,cantidad:item.cantidad + 1}
                    : item
                ) ,                 
            } 
            :{
                ...state,
                cart:[...state.cart,{...newItem,cantidad:1}]
            }
        };

        case TYPES.REMOVE_ONE_PRODUCT:{
          let itemAEliminar=state.cart.find(item=>item.id===acciones.payload)

            return itemAEliminar.cantidad > 1
            ?{
                ...state,
                cart:state.cart.map(item=>
                    item.id===acciones.payload
                    ?{...item,cantidad:item.cantidad-1}
                    : item
                    )

            }:{
                ...state,
                cart:state.cart.filter(item=>item.id !==acciones.payload)
            }
        };

        case TYPES.REMOVE_ALL_PRODUCTS:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.id !==acciones.payload)
            }
        };

                    
            
        default:
            return state;
    }
}
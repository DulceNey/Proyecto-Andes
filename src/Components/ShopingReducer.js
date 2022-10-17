import { TYPES } from  './actions'


export const ShopingInitialSate = {
  products: [
    {id:1,name:"Producto A" ,price :10},
    {id:2,name:"Producto B" ,price :20},
    {id:3,name:"Producto C" ,price :30},
    {id:4,name:"Producto D" ,price :40},
    {id:5,name:"Producto E" ,price :50},
    {id:6,name:"Producto F" ,price :60}

  ],
  cart : [ ]

}


 export function ShopingReducer (state,actions){
    switch (actions.type) {
        case TYPES.ADD_TO_CART: {
          let newItem = state.products.find(product=>product.id === action.payload)
        let itemInCart = state.cart.find (item => item.id === newItem.id) 
        return itemInCart 
          ? {
            ...state,
            cart: state.cart.map (item=>
              item.id === newItem.id 
                ?{...item, quantity: item.quantity + 1}
                : item ) 
            }

          : {
            ... state ,
            cart : [...state.cart, {...newItem, quantity: 1}]
          }
           
        }

       case TYPES.REMOVE_ONE_PRODUCT: {
        let itemToDelete = state.cart.find(item=>item.id === action.payload)
        return itemToDelete.quantity > 1
        ? {
          ...state,
          cart:state.cart.map(item=>
            item.id === action.payload
          ? {... item,quantity: item.quantity-1}
           :item
           )
          }
          : {
            ...state,
            cart: state.cart.filter(item=> item.id !== action.payload)
          }
       }
      case TYPES.REMOVE_ALL_PRODUCT: {
        return {
          ...state,
          cart: state.cart.filter(item=> item.id !== action.payload)
        }
      }
      case TYPES.CLEAR_CART: {
        return ShopingInitialSate;
      }
       
        default:
            return state
    }
}






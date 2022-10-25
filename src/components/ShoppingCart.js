import { TYPES } from './actions'
import  { useReducer } from 'react'
import { ShoppingReducer, ShoppingInitialState } from './ShoppingReducer'
import Product from './Product'
import CartItem from './CartItem'


const ShoppingCart = () => {
    const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState)
    const {products, cart } = state;

    const addToCart = (id) => {
       dispatch( {type: TYPES.ADD_TO_CART, payload :id})
    }
   const deleteFromCart = (id, all = false) => {
      if (all){
     dispatch ({type: TYPES.REMOVE_ALL_PRODUCTS, payload :id}) 
       } else {
    dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})
    }
  } 
    const clearCart =   ()=> dispatch ({type: TYPES.CLEAR_CART}) 
    


  return (
<>
<h2>carrito de compras</h2>

<h3 >Productos</h3>

<div>
    {
        products.map(product => <Product key = {product.id} addToCart={addToCart}/>)
    }
</div>
<h3>carrito</h3>
<div>
  {
    cart.map ((item, index) => <CartItem key = {index} data={item} deleteFromCart={deleteFromCart}/>)
  }
</div>

<button>limpiar carrito</button>

</>
  )
}

export default ShoppingCart
import { TYPES } from './actions'
import { useReducer } from 'react'
import {ShopingInitialSate,ShopingReducer} from './ShopingReducer'
import Products from './Products'
import CartItem from './CartItem'


const ShopingCart = () => {
    const [state,dispatch] = useReducer (ShopingReducer,ShopingInitialSate)
    const {product,cart} = state;
    const AddToCart = (id) => {
      dispatch({type:TYPES.ADD_TO_CART,payload:id})
    }
    const deleteFromCart = (id, all = false)=> {
      if (all) {

        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
      }
      else {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id })
      }

      const cleanCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
      }


      return (
        <>

          <h2 className=' md: white-text bg-orange'>Carrito de compras </h2>

          <h3>productos</h3>

          <div>  {product.map(product => <Products key={product.id} data={product} AddToCart={AddToCart} />)}
          </div>

          <h3>carrito</h3>
          <div>
            {cart.map((item, index) => <cartItem key={index} data={item} deleteFromCart={deleteFromCart} />  )
             }
          </div>

          <button onClick={cleanCart}>limpiar carrito</button>
        </>
      )
    }
  }




export default ShopingCart

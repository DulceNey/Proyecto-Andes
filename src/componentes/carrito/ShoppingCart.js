import React, { useState } from "react";
import { TYPES } from "./acciones";
import { useEffect } from "react";
import ItemsCarrito from "./ItemsCarrito";
import { useToursContext } from "./ToursContext";
import axios from "axios";
import { shoppingInitialState } from "./shoppingReducer";

const ShoppingCart = ({ setvisibleCart, item }) => {
  const { state, dispatch } = useToursContext();
  const { products, cart } = state;

  const [db, setDb] = useState(shoppingInitialState);

  const getState = async (data) => {
    const productsURL = "http://localhost:8080/products";
    const cartURL = "http://localhost:8080/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const ProductList = await resProducts.data;
    const newCartItem = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [ProductList, newCartItem] });
  };

  useEffect(() => {
    getState();
  }, []);

  const addToCart = async (data) => {
    data.id = Date.now();

    data["cantidad"] = 1;

    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    };

    await axios("http://localhost:8080/cart", options);

    getState();
  };

  const incrementarContador = async (data) => {
    const { id } = data;
    const endpoint = `http://localhost:8080/cart/${id}`;

    data.cantidad++;

    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    };

    await axios(endpoint, options);

    getState();
  };

  const decrementarContador = async (data) => {
    const { id, cantidad } = data;

    if (cantidad > 1) {
      const endpoint = `http://localhost:8080/cart/${id}`;

      data.cantidad--;

      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify(data),
      };

      await axios(endpoint, options);

      getState();
    }
    return state;
  };

  const deleteFromCart = async (id) => {
    const endpoint = `http://localhost:8080/cart/${id}`;

    const options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };

    await axios(endpoint, options);

    getState();
  };

  return (
    <>
      <div className=" fixed flex-col justify-center float-right w-5/6 h-full bg-slate-300 md:w-2/5 flex-nowrap item-center z-50 top-16 right-0">

        <div>
          {cart.map((item, index) => (
            <ItemsCarrito
              key={index}
              data={item}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              incrementarContador={incrementarContador}
              decrementarContador={decrementarContador}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

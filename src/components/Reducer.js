import React from "react";

const Reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      ),
    };
  }
  return state;
};

export default Reducer;

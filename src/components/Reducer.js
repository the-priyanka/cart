import React from "react";

const Reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  return <div>{state}</div>;
};

export default Reducer;

import React, { useContext, useReducer, useState } from "react";
import cartItems from "./components/Data";
import Reducer from "./components/Reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

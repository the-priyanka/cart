import React from "react";
import { useGlobalContext } from "../context";

const CartItem = (props) => {
  const { remove, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={props.img} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
        <h4 className="item-price">{props.price}</h4>
        {/* remove button  */}
        <button
          className="remove-btn"
          onClick={() => remove(props.id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => toggleAmount(props.id, "inc")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{props.amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => toggleAmount(props.id, "dec")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;

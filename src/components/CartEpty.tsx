import { Link } from "react-router-dom";
import React from "react";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty <span>😕</span>
      </h2>
      <p>
        You probably haven't ordered burger yet.
        <br />
        To order burger, go to the main page.
      </p>
      <img
        src="https://pngicon.ru/file/uploads/korzina-1.png"
        alt="Empty cart"
      />
      <Link to="/" className="button button--black">
        <span>Go to Main page</span>
      </Link>
    </div>
  );
};

export default CartEmpty;

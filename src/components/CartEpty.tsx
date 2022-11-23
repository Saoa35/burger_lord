import { Link } from "react-router-dom";

const CartEmpty = () => {
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
        <span>Go Back</span>
      </Link>
    </div>
  );
};

export default CartEmpty;

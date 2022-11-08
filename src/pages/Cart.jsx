export const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          {/* <svg/> */}
          Cart
        </h2>
        <div className="cart__clear">
          {/* <svg></svg> */}
          <span>Clear cart</span>
        </div>
      </div>
      <div className="content__items">
        <div className="cart__item">
          <div className="cart__item-img">
            <img alt="Burger" />
          </div>
          <div className="cart__item-info">
            <h3>Colorado King Chicken</h3>
            <p>Standart,Single</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
          <div className="cart__item-count">
            <div className="button button--outline button--circle cart__item-count-minus">
              {/* <svg></svg> */}
            </div>
            <b>2</b>
            <div className="button button--outline button--circle cart__item-count-plus">
              {/* <svg></svg> */}
            </div>
          </div>
          <div className="cart__item-price">
            <b>5.2 $</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle">
              {/* <svg></svg> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

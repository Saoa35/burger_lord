import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header__container">
          <div className="header__logo">
            <img alt="Logo" />
            <div>
              <h1>Burger Lord</h1>
              <p>best burgers in the world</p>
            </div>
          </div>
          <div className="header__cart">
            <div className="cart__price">
              <span>55 $</span>
            </div>
            <div className="cart__quantity">
              <img alt="Cart Logo" />
              <p>3</p>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="container">
          <div className="content__top">
            <div className="categories">
              <ul>
                <li className="active">All</li>
                <li>Chicken</li>
                <li>Pork</li>
                <li>Plant-Based</li>
                <li>Cheese</li>
                <li>Bacon</li>
              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <svg />
                <b>Sorting by</b>
                <span>popularity</span>
              </div>
            </div>
          </div>
          <h2 className="content__title">All Burgers</h2>
          <div className="content__items">
            <div className="card">
              <img
                src="https://sawepecomcdn.blob.core.windows.net/bk-web-ordering/BK%20PL/bk_images/oferty_specjalne/lto_texas_bbq_chicken/texas_bbq_chicken.png"
                alt="Burger"
              />
              <h4 className="card__title">Texas BBQ Chicken</h4>
              <div className="cartBlock__selector">
                <ul>
                  <li>Standart</li>
                  <li>Double</li>
                </ul>
                <ul>
                  <li>Single</li>
                  <li>+ Coca Cola</li>
                  <li>+ Coca Cola and French fries</li>
                </ul>
              </div>
              <div className="card__bottom">
                <div className="cart__price">from 15 $</div>
                <div className="add__button">
                  <svg />
                  <span>Add to Cart</span>
                  <i>2</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

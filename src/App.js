import Header from "./components/Header";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
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
                <b>Sorting by:</b>
                <span>popularity</span>
              </div>
              <div className="sort__popup">
                <ul>
                  <li className="active">popularity</li>
                  <li>price</li>
                  <li>alphabetical</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="content__title">All Burgers</h2>
          <div className="content__items">
            <div className="card">
              <img
                className="card__image"
                src="https://sawepecomcdn.blob.core.windows.net/bk-web-ordering/BK%20PL/bk_images/oferty_specjalne/lto_texas_bbq_chicken/texas_bbq_chicken.png"
                alt="Burger"
              />
              <h4 className="card__title">Texas BBQ Chicken</h4>
              <div className="card__selector">
                <ul>
                  <li className="active">Standart</li>
                  <li>Double</li>
                </ul>
                <ul>
                  <li className="active">Single</li>
                  <li>+Pepsi</li>
                  <li>+Pepsi+Fries</li>
                </ul>
              </div>
              <div className="card__bottom">
                <div className="card__price">from 15 $</div>
                <div className="button button--outline button--add">
                  {/* <svg /> */}
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

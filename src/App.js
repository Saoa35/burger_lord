import Card from "./components/Card";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";
import burgers from "./assets/burgers";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Burgers</h2>
          <div className="content__items">
            {burgers.map((obj, index) => (
              <Card
                key={index}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                additives={obj.additives}
                types={obj.types}
              />
            ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

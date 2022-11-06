import Card from "./components/Card";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";
import { useEffect, useState } from "react";

function App() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("https://6367d9abedc85dbc84dd1748.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setBurgers(data));
    // .catch(error) {
    //   console.log(error.mesage);
    // }
  });

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
            {burgers.map((obj) => (
              <Card key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

import Card from "./components/Card";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";

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
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
            <Card title={"Texas BBQ Chicken"} price={15} />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;

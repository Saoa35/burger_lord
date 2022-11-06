import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://6367d9abedc85dbc84dd1748.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.mesage);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All Burgers</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;

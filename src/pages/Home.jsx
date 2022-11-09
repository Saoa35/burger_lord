import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://6367d9abedc85dbc84dd1748.mockapi.io/items?category=" + categoryId
      // (categoryId = 0
      //   ? "https://6367d9abedc85dbc84dd1748.mockapi.io/items"
      //   : "https://6367d9abedc85dbc84dd1748.mockapi.io/items?category=" +
      //     categoryId)
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.mesage);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);

  const onClickCategory = (i) => {
    setCategoryId(i);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => onClickCategory(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">All Burgers</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <Card key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;

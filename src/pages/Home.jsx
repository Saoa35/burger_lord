import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

function Home({ serchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6367d9abedc85dbc84dd1748.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty.replace("-", "")}&order=${
        sortType.sortProperty.includes("-") ? "asc" : "desc"
      } `
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
  }, [categoryId, sortType]);

  const onClickCategory = (i) => {
    setCategoryId(i);
  };

  const burgers = items.map((obj) => <Card key={obj.id} {...obj} />);

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
          : burgers}
      </div>
    </div>
  );
}

export default Home;

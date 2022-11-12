import { useContext } from "react";
import { useEffect, useState } from "react";
import { SearchContext } from "../App";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import { Pagination } from "../components/Pagination";
import Sort from "../components/Sort";

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "popularity",
    sortProperty: "rating",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { serchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6367d9abedc85dbc84dd1748.mockapi.io/items?page=${currentPage}&limit=6&${
        categoryId > 0 ? `category=${categoryId}` : ""
      }${
        serchValue ? `search=${serchValue}` : ""
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
  }, [categoryId, sortType, serchValue, currentPage]);

  const onClickCategory = (i) => {
    setCategoryId(i);
  };

  const burgers = items
    // .filter((object) => {
    //   if (object.title.toLowerCase().includes(serchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj) => <Card key={obj.id} {...obj} />);
  const skeletons = [...Array(6)].map((_, i) => <Skeleton key={i} />);

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
      <div className="content__items">{isLoading ? skeletons : burgers}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;

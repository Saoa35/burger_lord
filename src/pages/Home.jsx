import { useContext } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "../App";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import { Pagination } from "../components/Pagination";
import Sort from "../components/Sort";
import { setCategoryId, setPageCount } from "../redux/slices/filterSlice";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const pageCount = useSelector((state) => state.filter.pageCount);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { serchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://6367d9abedc85dbc84dd1748.mockapi.io/items?page=${pageCount}&limit=6&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }${serchValue ? `search=${serchValue}` : ""}&sortBy=${sortType.replace(
          "-",
          ""
        )}&order=${sortType.includes("-") ? "asc" : "desc"} `
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.mesage);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, serchValue, pageCount]);

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
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All Burgers</h2>
      <div className="content__items">{isLoading ? skeletons : burgers}</div>
      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;

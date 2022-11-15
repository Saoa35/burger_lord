import { useContext } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "../App";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import { Pagination } from "../components/Pagination";
import Sort from "../components/Sort";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";

function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { serchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://6367d9abedc85dbc84dd1748.mockapi.io/items?page=${currentPage}&limit=6&${
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
  }, [categoryId, sortType, serchValue, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sortType,
      categoryId,
      currentPage,
    });
  }, [categoryId, sortType, serchValue, currentPage]);

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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;

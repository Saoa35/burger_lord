import { useEffect, useState, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchContext } from "../App";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import { Pagination } from "../components/Pagination";
import Sort, { list } from "../components/Sort";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchBurgers } from "../redux/slices/burgersSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const items = useSelector((state) => state.burger.items);

  const { serchValue } = useContext(SearchContext);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getBurgers = async () => {
    setIsLoading(true);

    try {
      dispatch(fetchBurgers({ currentPage, categoryId, serchValue, sortType }));
    } catch (error) {
      console.log("ERROR", error);
      alert("Sorry, no products found :(");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, serchValue, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getBurgers();
    }

    isSearch.current = false;
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

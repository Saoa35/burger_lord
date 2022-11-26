import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";
import Categories from "../components/Categories";
import { Pagination } from "../components/Pagination";
import Sort from "../components/Sort";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import qs from "qs";
import { Link, useNavigate } from "react-router-dom";
import { fetchBurgers, selectBurgerData } from "../redux/slices/burgersSlice";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectBurgerData);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getBurgers = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    // const category = categoryId > 0 ? String(categoryId) : "";
    // const search = searchValue;

    dispatch(
      fetchBurgers({
        sortBy,
        order,
        category,
        search,
        currentPage,
        // currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        sortProperty: sort.sortProperty,
        categoryId: categoryId > 0 ? categoryId : null,
        currentPage,
      };

      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`/?${queryString}`);
    }

    if (!window.location.search) {
      fetchBurgers();
    }
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    getBurgers();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const burgers = items
    // .filter((object) => {
    //   if (object.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj: any) => (
      <Link to={`/burger/${obj.id}`} key={obj.id}>
        <Card {...obj} />
      </Link>
    ));

  const skeletons = [...Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All Burgers</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>An error has occurred ☹️</h2>
          <p>
            Unfortunately, we could not get a list of burgers. Please try again
            later. 😼
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : burgers}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;

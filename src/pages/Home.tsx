import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Skeleton, Categories, Pagination, Sort } from "../components";
import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { selectBurgerData } from "../redux/burger/selectors";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { fetchBurgers } from "../redux/burger/asyncActions";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectBurgerData);

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getBurgers = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";
    const search = searchValue;

    dispatch(
      fetchBurgers({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getBurgers();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const burgers = items.map((obj: any) => <Card {...obj} key={obj.id} />);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort value={sort} />
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

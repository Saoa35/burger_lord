import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={6}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

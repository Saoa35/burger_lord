import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

export const Pagination = ({ onChangePage, value }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={value}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

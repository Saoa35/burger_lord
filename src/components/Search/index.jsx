import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div>
      <input className={styles.root} placeholder="Serch burger..." />
    </div>
  );
};

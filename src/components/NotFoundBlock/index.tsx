import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <h1 className={styles.root}>
      <p>😕</p>
      Page is not found...
    </h1>
  );
};

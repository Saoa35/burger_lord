import React, { memo } from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
};

const categories = ["All", "Chicken", "Pork", "Plant-Based", "Cheese", "Bacon"];

const Categories: React.FC<CategoriesProps> = memo(
  ({ value, onClickCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((el, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value === index ? "active" : ""}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;

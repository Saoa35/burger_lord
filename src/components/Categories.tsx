import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: any;
};

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const categories = [
    "All",
    "Chicken",
    "Pork",
    "Plant-Based",
    "Cheese",
    "Bacon",
  ];

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
};

export default Categories;

import { useState } from "react";

function Categories({ value }) {
  console.log(value);

  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "All",
    "Chicken",
    "Pork",
    "Plant-Based",
    "Cheese",
    "Bacon",
  ];

  const onClickCategory = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

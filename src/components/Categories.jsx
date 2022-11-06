import { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (i) => {
    setActiveIndex(i);
  };

  return (
    <div className="categories">
      {}
      <ul>
        <li className="active">All</li>
        <li>Chicken</li>
        <li>Pork</li>
        <li>Plant-Based</li>
        <li>Cheese</li>
        <li>Bacon</li>
      </ul>
    </div>
  );
}

export default Categories;

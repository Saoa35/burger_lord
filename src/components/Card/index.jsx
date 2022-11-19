import { useState } from "react";

function Card({ id, title, price, imageUrl, additives, types }) {
  const [activeAdditives, setActiveAdditives] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const typeNames = ["Standart", "Double"];

  const onClickAdd = () => {};
  const item = {
    id,
    title,
    price,
    imageUrl,
  };
  return (
    <div className="card-wrapper">
      <div className="card">
        <img className="card__image" src={imageUrl} alt="Burger" />
        <h4 className="card__title">{title}</h4>
        <div className="card__selector">
          <ul>
            {types.map((el) => (
              <li
                key={el}
                onClick={() => setActiveType(el)}
                className={activeType === el ? "active" : ""}
              >
                {typeNames[el]}
              </li>
            ))}
          </ul>
          <ul>
            {additives.map((el, i) => (
              <li
                key={i}
                onClick={() => setActiveAdditives(i)}
                className={activeAdditives === i ? "active" : ""}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="card__bottom">
          <div className="card__price">from {price} $</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add to Cart</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

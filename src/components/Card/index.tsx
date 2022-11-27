import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemById } from "../../redux/cart/selectors";
import { addItem } from "../../redux/cart/slice";
import { CartItem } from "../../redux/cart/types";

const typeNames = ["Standart", "Double"];

type CardProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  additives: string[];
  types: number[];
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  price,
  imageUrl,
  additives,
  types,
}) => {
  const [activeAdditives, setActiveAdditives] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const cartItem = useSelector(selectCartItemById(id));
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      additives: additives[activeAdditives],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <Link to={`/burger/${id}`} key={id}>
          <img className="card__image" src={imageUrl} alt="Burger" />
          <h4 className="card__title">{title}</h4>
        </Link>
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
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
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
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

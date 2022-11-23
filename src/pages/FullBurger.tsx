import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullBurger: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [burger, setBurger] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchBurgers() {
      try {
        const { data } = await axios.get(
          "https://6367d9abedc85dbc84dd1748.mockapi.io/items/" + id
        );
        setBurger(data);
      } catch (error) {
        alert("Error request ;(");
        navigate("/");
      }
    }
    fetchBurgers();
  }, []);

  if (!burger) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={burger.imageUrl} alt="Burger" />
      <h2>{burger.title}</h2>
      <h4>{burger.price} $</h4>
    </div>
  );
};

export default FullBurger;

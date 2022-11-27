import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Burger, SearchBurgerParams } from "./types";

export const fetchBurgers = createAsyncThunk<Burger[], SearchBurgerParams>(
  "burger/fetchBurgersStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6367d9abedc85dbc84dd1748.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}&search=${search}`
    );

    return data;
  }
);

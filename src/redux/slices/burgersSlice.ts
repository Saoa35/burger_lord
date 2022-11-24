import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBurgers = createAsyncThunk(
  "burger/fetchBurgersStatus",
  async ({ sortBy, order, category, search, currentPage }) => {
    const { data } = await axios.get(
      `https://6367d9abedc85dbc84dd1748.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}&search=${search}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const burgersSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchBurgers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchBurgers.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchBurgers.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectBurgerData = (state) => state.burger;

export const { setItems } = burgersSlice.actions;

export default burgersSlice.reducer;

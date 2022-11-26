import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchBurgers = createAsyncThunk<Burger[], Record<string, string>>(
  "burger/fetchBurgersStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6367d9abedc85dbc84dd1748.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}&search=${search}`
    );

    return data;
  }
);

type Burger = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  additives: string;
  types: number;
};

interface BurgerSliceState {
  items: Burger[];
  status: "loading" | "success" | "error";
}

const initialState: BurgerSliceState = {
  items: [],
  status: "loading",
};

const burgersSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Burger[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBurgers.pending, (state, action) => {
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchBurgers.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });

    // [fetchBurgers.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [fetchBurgers.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    //   state.status = "success";
    // },
    // [fetchBurgers.rejected]: (state, action) => {
    //   state.status = "error";
    //   state.items = [];
    // },
  },
});

export const selectBurgerData = (state: RootState) => state.burger;

export const { setItems } = burgersSlice.actions;

export default burgersSlice.reducer;

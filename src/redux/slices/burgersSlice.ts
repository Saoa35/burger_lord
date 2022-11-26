import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

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

export type SearchBurgerParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

type Burger = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  additives: string;
  types: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface BurgerSliceState {
  items: Burger[];
  status: Status;
}

const initialState: BurgerSliceState = {
  items: [],
  status: Status.LOADING,
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
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchBurgers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchBurgers.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectBurgerData = (state: RootState) => state.burger;

export const { setItems } = burgersSlice.actions;

export default burgersSlice.reducer;

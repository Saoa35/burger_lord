import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
import { RootState } from "../store";

type Sort = {
  name: string;
  sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: Sort;
  currentPage: number;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  sort: { name: "popularity", sortProperty: "rating" },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.sort = action.payload.sort;
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = { name: "popularity", sortProperty: "rating" };
      }
    },
  },
});

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;

export const {
  setCategoryId,
  setSortType,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  sort: { name: "popularity", sortProperty: "rating" },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectSort = (state) => state.filter.sort;

export const { setCategoryId, setSortType, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;

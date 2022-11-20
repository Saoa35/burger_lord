import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const burgersSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setItems(state, action) {},
  },
});

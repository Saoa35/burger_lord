import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "popularity", sortProperty: "rating" },
};

const filterSlice = createSlice({});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBurgers } from "./asyncActions";
import { Burger, BurgerSliceState, Status } from "./types";

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

export const { setItems } = burgersSlice.actions;

export default burgersSlice.reducer;

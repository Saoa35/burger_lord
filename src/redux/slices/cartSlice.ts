import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  title: string;
  price:number;
  imageUrl: string;
  type: number;
  additives: string;
}

interface CartSliceState {
  totalPrice: number;
  items: 
}

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce(
        (prev, obj) => obj.price * obj.count + prev,
        0
      );
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
      // state.totalPrice = state.items.reduce(
      //   (prev, obj) => obj.price * obj.count + prev,
      //   0
      // );
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      // state.totalPrice = state.items.reduce(
      //   (prev, obj) => obj.price * obj.count + prev,
      //   0
      // );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;

export const selectCartItemById = (id) => (state) => {
  state.cart.items.find((obj) => obj.id === id);
};

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

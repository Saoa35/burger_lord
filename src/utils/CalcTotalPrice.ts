import { CartItem } from "../redux/slices/cartSlice";

export const CalcTotalPrice = (items: CartItem[]) => {
  return (state.totalPrice = state.items.reduce((prev, obj) => {
    return obj.price * obj.count + prev;
  }, 0));
};

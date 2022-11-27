import { CartItem } from "../redux/cart/types";

export const CalcTotalPrice = (items: CartItem[]) => {
  return items.reduce((prev, obj) => {
    return obj.price * obj.count + prev;
  }, 0);
};

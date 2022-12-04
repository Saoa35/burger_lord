import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((prev, obj) => {
    return obj.price * obj.count + prev;
  }, 0);
};

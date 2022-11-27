export type SearchBurgerParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export type Burger = {
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

export interface BurgerSliceState {
  items: Burger[];
  status: Status;
}

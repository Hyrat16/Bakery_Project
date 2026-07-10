import { listProducts } from "../../data/dataProds";

export const useCategory = () => {
  const listCategories = listProducts
    .map((product) => product.category?.trim())
    .filter(Boolean);

  return ["Todos", ...new Set(listCategories)];
};

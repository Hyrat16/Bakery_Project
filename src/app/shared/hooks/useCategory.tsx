import { listProducts } from "../../data/dataProds";

export const useCategory = () => {
  const listCategories = listProducts.map((categories) => {
    const value = categories.categoria;
    return value;
  });

  const arrayCategoriesValue = ["Todos"].concat([...new Set(listCategories)]);

  return arrayCategoriesValue;
};

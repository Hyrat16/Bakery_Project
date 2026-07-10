import { useState } from "react";
import { ListProdContext } from "../hooks";
import { listProducts } from "../../data/dataProds";
import { type Product } from "../types";

interface provProdProps {
  children: React.ReactNode;
}

export const ListProdProvider = ({ children }: provProdProps) => {
  const [products, setProductss] = useState<Product[]>(listProducts);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const refetch = () => setProductss(listProducts);

  return (
    <ListProdContext.Provider
      value={{ products: products, loading, error, refetch }}
    >
      {children}
    </ListProdContext.Provider>
  );
};

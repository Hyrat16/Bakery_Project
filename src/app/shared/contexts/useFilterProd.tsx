import { useState } from "react";
import { ListProdContext } from ".";
import { listaDeProdutos } from "../../data/dataProds";
import { type Produto } from "../types";

interface provProdProps {
  children: React.ReactNode;
}

export const ListProdProvider = ({ children }: provProdProps) => {
  const [produtos, setProdutos] = useState<Produto[]>(listaDeProdutos);
  const [loading] = useState(false);
  const [erro] = useState<string | null>(null);

  const refetch = () => setProdutos(listaDeProdutos);

  return (
    <ListProdContext.Provider
      value={{ produto: produtos, loading, erro, refetch }}
    >
      {children}
    </ListProdContext.Provider>
  );
};

import { createContext, useContext } from "react";
import { type Produto } from "../types";

export interface ProdutoProv {
  produto: Produto[];
  loading: boolean;
  erro: string | null;
  refetch: () => void;
}

export const ListProdContext = createContext<ProdutoProv | undefined>(
  undefined,
);

export const useProdutos = () => {
  const context = useContext(ListProdContext);
  if (!context)
    throw new Error("useProdutos deve ser usado dentro do ListProdProvider");
  return context;
};

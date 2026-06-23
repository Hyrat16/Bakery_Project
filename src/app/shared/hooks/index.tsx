import { createContext, useContext } from "react";
import type { ProductContextType, CartContextType } from "../types";

export const ListProdContext = createContext<ProductContextType | undefined>(
  undefined,
);

export const useProducts = () => {
  const context = useContext(ListProdContext);
  if (!context)
    throw new Error("useProdutos deve ser usado dentro do ListProdProvider");
  return context;
};

export const SalesItenscontext = createContext<CartContextType | null>(null);

export const useSalesItens = () => {
  const context = useContext(SalesItenscontext);
  if (!context)
    throw new Error("useCarrinho deve ser usado dentro do CarrinhoProvider");
  return context;
};

import { type ProductCart, type Product } from "../types";
import { useState } from "react";
import { SalesItenscontext } from "../hooks";

interface ProductProps {
  children: React.ReactNode;
}

export const SalesItensProvider = ({ children }: ProductProps) => {
  const [currentSalesList, setcurrentSalesList] = useState<ProductCart[]>([]);

  const handleAdicionarProduto = (produto: Product) => {
    setcurrentSalesList((prev) => {
      const jaExiste = prev.find((p) => p.id === produto.id);

      if (jaExiste) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p,
        );
      }

      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const removerProduto = (id: Product["id"]) => {
    setcurrentSalesList((prev) => {
      const item = prev.find((p) => p.id === id);

      if (!item) return prev;

      if (item.quantidade > 1) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantidade: p.quantidade - 1 } : p,
        );
      }

      return prev.filter((p) => p.id !== id);
    });
  };

  const updateItem = (id: Product["id"], newQuantity: number) => {
    setcurrentSalesList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantidade: newQuantity } : p)),
    );
  };

  const limparCarrinho = () => setcurrentSalesList([]);

  return (
    <SalesItenscontext.Provider
      value={{
        currentSalesList,
        handleAdicionarProduto,
        removerProduto,
        limparCarrinho,
        updateItem,
      }}
    >
      {children}
    </SalesItenscontext.Provider>
  );
};

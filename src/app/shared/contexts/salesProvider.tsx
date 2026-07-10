import { type ProductCart, type Product } from "../types";
import { useState } from "react";
import { SalesItenscontext } from "../hooks";

interface ProductProps {
  children: React.ReactNode;
}

export const SalesItensProvider = ({ children }: ProductProps) => {
  const [currentSalesList, setcurrentSalesList] = useState<ProductCart[]>([]);

  const handleAddProduct = (product: Product) => {
    setcurrentSalesList((prev) => {
      const alreadyExists = prev.find((p) => p.id === product.id);

      if (alreadyExists) {
        return prev.map((p) =>
          p.id === product.id
            ? ({
                ...p,
                quantity: p.quantity + 1,
                valueTotal: Number(p.unitValue) * (p.quantity + 1),
              } as ProductCart)
            : p,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          valueTotal: Number(product.unitValue) * 1,
        } as ProductCart,
      ];
    });
  };

  const adjustItemQuantity = (id: Product["id"]) => {
    setcurrentSalesList((prev) => {
      const item = prev.find((p) => p.id === id);

      if (!item) return prev;

      if (item.quantity > 1) {
        return prev.map((p) =>
          p.id === id
            ? ({
                ...p,
                quantity: p.quantity - 1,
                valueTotal: Number(p.unitValue) * p.quantity,
              } as ProductCart)
            : p,
        );
      }

      return prev.filter((p) => p.id !== id);
    });
  };

  const updateItem = (id: Product["id"], newQuantity: number) => {
    setcurrentSalesList((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          quantity: newQuantity,
          stock: p.stock - p.quantity,
          valueTotal: Number(p.unitValue) * p.quantity,
        } as ProductCart;
      }),
    );
  };

  const removeItem = (id: Product["id"]) => {
    setcurrentSalesList((prev) => {
      const item = prev.find((p) => p.id === id);

      if (!item) return prev;

      return prev.filter((p) => p.id !== id);
    });
  };

  const clearCart = () => setcurrentSalesList([]);

  return (
    <SalesItenscontext.Provider
      value={{
        currentSalesList,
        handleAddProduct,
        adjustItemQuantity,
        clearCart,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </SalesItenscontext.Provider>
  );
};

import { useProducts, useSalesItens } from "../../hooks";
import { type ProductCart } from "../../types";
import { ProductCardItem } from "./productCard";

export interface ProductListProps {
  activeCategory: string;
  activeProduct: string;
  onSelectProduct?: (product: ProductCart) => void;
}

export const ProductList = ({
  activeCategory,
  activeProduct,
}: ProductListProps) => {
  const { products } = useProducts();
  const { handleAddProduct } = useSalesItens();

  const filteredProducts = products.filter((product) => {
    if (activeProduct.length !== 0) {
      return product.name.toLowerCase().includes(activeProduct.toLowerCase());
    }
    if (activeCategory === "Todos") {
      return true;
    }

    return product.category === activeCategory;
  });

  return (
    <>
      {filteredProducts.map((product) => (
        <ProductCardItem
          key={product.id}
          product={product}
          onSelect={handleAddProduct}
        />
      ))}
    </>
  );
};

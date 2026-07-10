export interface Product {
  id: string | number;
  name: string;
  category: string;
  stock: number;
  unit: string;
  unitValue: string;
  emoji: string;
  valueTotal?: string | number;
}

export interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export interface ProductCart extends Product {
  quantity: number;
}

export interface CartContextType {
  currentSalesList: ProductCart[];
  handleAddProduct: (product: Product) => void;
  adjustItemQuantity: (id: Product["id"]) => void;
  clearCart: () => void;
  updateItem: (id: Product["id"], newQuantity: number) => void;
  removeItem: (id: Product["id"]) => void;
}

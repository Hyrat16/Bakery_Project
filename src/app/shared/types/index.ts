export interface Product {
  id: string | number;
  nome: string;
  categoria: string;
  estoque: number;
  unidade: string;
  valorUn: string;
  emoji: string;
}

export interface ProductContextType {
  produto: Product[];
  loading: boolean;
  erro: string | null;
  refetch: () => void;
}

export interface ProductCart extends Product {
  quantidade: number;
}

export interface CartContextType {
  currentSalesList: ProductCart[];
  handleAdicionarProduto: (produto: Product) => void;
  removerProduto: (id: Product["id"]) => void;
  limparCarrinho: () => void;
  updateItem: (id: Product["id"], newQuantity: number) => void;
}

export interface Produto {
  id: string | number;
  nome: string;
  categoria: string;
  estoque: number;
  unidade: string;
  valorUn: string;
  emoji: string;
}

export interface ProductContextType {
  produto: Produto[];
  loading: boolean;
  erro: string | null;
  refetch: () => void;
}

export interface ProductCart extends Produto {
  quantidade: number;
}

export interface CartContextType {
  currentSalesList: ProductCart[];
  handleAdicionarProduto: (produto: Produto) => void;
  removerProduto: (id: Produto["id"]) => void;
  limparCarrinho: () => void;
}

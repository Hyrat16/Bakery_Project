export interface Produto {
  id: string | number;
  nome: string;
  categoria: string;
  estoque: number;
  unidade: string;
  valorUn: string;
  emoji: string;
}

export interface ProdutoProv {
  produto: Produto[];
  loading: boolean;
  erro: string | null;
  refetch: () => void;
}
//export type Categorias = "Paes" | "Salgados" | "Doces" | "Bebidas";

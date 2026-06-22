import { useProdutos } from "../../contexts";
import { type Produto } from "../../types";
import { ProductCard } from "./produtoCard";

export interface ListagemProdutosProps {
  categoriaAtiva: string;
  produtoAtivo: string;
  onSelecionarProduto?: (produto: Produto) => void;
}

export const ListProdutos = ({
  categoriaAtiva,
  produtoAtivo,
  onSelecionarProduto,
}: ListagemProdutosProps) => {
  const { produto } = useProdutos();

  const produtosFiltrados = produto.filter((produto) => {
    if (produtoAtivo.length !== 0) {
      return produto.nome.toLowerCase().includes(produtoAtivo.toLowerCase());
    }
    if (categoriaAtiva === "Todos") {
      return true;
    }

    return produto.categoria === categoriaAtiva;
  });

  const handleSelecionar = (produto: Produto) => {
    console.log(produto);
    onSelecionarProduto?.(produto);
  };

  return (
    <>
      {produtosFiltrados.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          onSelect={handleSelecionar}
        />
      ))}
    </>
  );
};

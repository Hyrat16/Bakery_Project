import { useProducts } from "../../hooks";
import { type Produto } from "../../types";
import { ProductCard } from "./productCard";
import { useSalesItens } from "../../hooks";

export interface ListagemProdutosProps {
  categoriaAtiva: string;
  produtoAtivo: string;
  onSelecionarProduto?: (produto: Produto) => void;
}

export const ListProdutos = ({
  categoriaAtiva,
  produtoAtivo,
}: ListagemProdutosProps) => {
  const { produto } = useProducts();
  const { handleAdicionarProduto } = useSalesItens();

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
    console.log()
    handleAdicionarProduto?.(produto);
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

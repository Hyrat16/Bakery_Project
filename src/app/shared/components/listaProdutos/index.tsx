import styles from "./index.module.css";
import { useProdutos } from "../../contexts";
import { type Produto } from "../../types";
import { useCategoriaEmoji } from "../../hooks/useEmojis";

export interface ListagemProdutosProps {
  categoriaAtiva: string;
  produtoAtivo: string;
}

const teste1 = (produto: Produto) => {
  console.log(produto);
  return produto;
};

export const ListagemProdutos = ({
  categoriaAtiva,
  produtoAtivo,
}: ListagemProdutosProps) => {
  const { produto } = useProdutos();
  const { obterEmoji } = useCategoriaEmoji();

  const produtosFiltrados = produto.filter((produto) => {
    if (produtoAtivo.length !== 0) {
      return produto.nome.toLowerCase().includes(produtoAtivo.toLowerCase());
    }
    if (categoriaAtiva === "Todos") {
      return true;
    }

    return produto.categoria === categoriaAtiva;
  });

  return (
    <>
      {produtosFiltrados.map((produtos) => {
        let classFinal = styles.produtoCard;
        let classSpan = styles.prodEstoqueBadge;

        if (produtos.estoque === 0) {
          classFinal += ` ${styles.produtoCardSemEstoque} `;
        }

        if (produtos.estoque <= 10) {
          classSpan += ` ${styles.prodEstoqueBadgeBaixo} `;
        }

        return (
          <div
            key={produtos.id}
            className={classFinal}
            onClick={() =>
              produtos.estoque != 0
                ? teste1(produtos)
                : console.log("Produto sem estoque")
            }
          >
            <span className={classSpan}>
              {produtos.estoque} {produtos.unidade}
            </span>
            <div className={styles.prodEmoji}>
              {obterEmoji(produtos.categoria)}
            </div>
            <div className={styles.prodNome}>{produtos.nome}</div>
            <div className={styles.prodPreco}>R$ {produtos.valorUn}</div>
          </div>
        );
      })}
    </>
  );
};

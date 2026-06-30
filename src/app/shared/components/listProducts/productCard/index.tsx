import type { Product } from "../../../types";
import { useCategoriaEmoji } from "../../../hooks/useEmojis";
import styles from "./index.module.css";

interface ProdutoProps {
  produto: Product;
  onSelect: (produto: Product) => void;
}

export const ProductCard = ({ produto, onSelect }: ProdutoProps) => {
  const { obterEmoji } = useCategoriaEmoji();

  let classFinal = styles.produtoCard;
  let classSpan = styles.prodEstoqueBadge;

  if (produto.estoque === 0) {
    classFinal += ` ${styles.produtoCardSemEstoque} `;
  }

  if (produto.estoque <= 10) {
    classSpan += ` ${styles.prodEstoqueBadgeBaixo} `;
  }

  const handleClick = () => {
    if (produto.estoque === 0) return;
    onSelect(produto);
  };

  return (
    <div className={classFinal} onClick={() => handleClick()}>
      <span className={classSpan}>
        {produto.estoque} {produto.unidade}
      </span>
      <div className={styles.prodEmoji}>{obterEmoji(produto.categoria)}</div>
      <div className={styles.prodNome}>{produto.nome}</div>
      <div className={styles.prodPreco}>R$ {produto.valorUn}</div>
    </div>
  );
};

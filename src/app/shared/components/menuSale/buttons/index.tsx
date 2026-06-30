import styles from "./index.module.css";
import type { ProductCart } from "../../../types";
interface NumPros {
  valueItens: number;
  produtoId: ProductCart["id"];
  onQuantidadeChange: (novaQtd: number) => void;
}

export const Buttons = ({ valueItens, onQuantidadeChange }: NumPros) => {
  return (
    <div className={styles.itemQtd}>
      <input
        className={styles.qtdNum}
        type="number"
        value={valueItens}
        min={1}
        onChange={(e) => onQuantidadeChange(Number(e.target.value))}
      />
    </div>
  );
};

import styles from "./index.module.css";
//import { type Product } from "../../../types";

interface NumPros {
  valueItens: number;
  onQuantityChange: (newQtd: number) => void;
  onRemove: () => void;
}

export const Buttons = ({
  valueItens,
  onQuantityChange,
  onRemove,
}: NumPros) => {
  return (
    <div className={styles.itemQtd}>
      <button className={styles.buttonRemove} onClick={onRemove}>
        X
      </button>
      <input
        className={styles.qtdNum}
        type="number"
        value={valueItens}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
      />
    </div>
  );
};

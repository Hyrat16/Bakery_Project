import styles from "./index.module.css";
//import { Produto } from "../../types";

interface NumPros {
  valueItens: number;
  onAdd?: () => void;
  onSubtract?: () => void;
}

export const Buttons = ({ valueItens, onAdd, onSubtract }: NumPros) => {
  return (
    <>
      <div className={styles.itemQtd}>
        <button className={styles.btnQtd} onClick={onAdd}>
          −
        </button>
        <span className={styles.qtdNum}>{valueItens}</span>
        <button className={styles.btnQtd} onClick={onSubtract}>
          +
        </button>
      </div>
    </>
  );
};

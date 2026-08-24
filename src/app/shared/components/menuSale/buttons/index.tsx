//import { useState } from "react";
import styles from "./index.module.css";
//import { useSalesItens } from "../../../hooks";
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
  //const { updateItem } = useSalesItens();
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
        //onChange={(e) => setAlt(e)}
      />
    </div>
  );
};

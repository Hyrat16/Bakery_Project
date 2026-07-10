import { type ProductCart } from "../../../types";
import { Buttons } from "../buttons";
import { useSalesItens } from "../../../hooks";
import styles from "./index.module.css";

interface Product {
  prods: ProductCart;
}

export const CardSaleItem = ({ prods }: Product) => {
  const { updateItem, removeItem } = useSalesItens();

  const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(prods.valueTotal));

  return (
    <>
      <div className={styles.saleItem}>
        <div className={styles.itemEmoji}>{prods.emoji}</div>
        <div className={styles.itemInfo}>
          <div className={styles.itemName}>{prods.name}</div>
          <div
            className={styles.itemUnit}
          >{`R$ ${prods.unitValue} / ${prods.unit}`}</div>
        </div>

        <Buttons
          onQuantityChange={(newQtd) => {
            if (newQtd < 0) {
              removeItem(prods.id);
            } else {
              updateItem(prods.id, newQtd);
            }
          }}
          valueItens={prods.quantity}
          onRemove={() => removeItem(prods.id)}
        />
        <div className={styles.itemTotal}>{formatCurrency}</div>
      </div>
    </>
  );
};

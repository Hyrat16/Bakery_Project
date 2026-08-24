import type { Product } from "../../../types";
//import { useCategoryEmoji } from "../../../hooks/useEmojis";
import styles from "./index.module.css";

interface ProductCardProps {
  product: Product; 
  onSelect: (product: Product) => void; 
}

export const ProductCardItem = ({ product, onSelect }: ProductCardProps) => {
  //const { getEmoji } = useCategoryEmoji();

  let cardClass = styles.productCard;
  let badgeClass = styles.stockBadge;

  if (product.stock === 0) {
    cardClass += ` ${styles.productCardOutOfStock}`;
  }

  if (product.stock <= 10) {
    badgeClass += ` ${styles.stockBadgeLow}`;
  }

  const handleClick = () => {
    if (product.stock === 0) return;
    onSelect(product);
  };

  return (
    <div className={cardClass} onClick={handleClick}>
      <span className={badgeClass}>
        {product.stock} {product.unit}
      </span>
      <div className={styles.productEmoji}>{product.emoji}</div>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.productPrice}>R$ {product.unitValue}</div>
    </div>
  );
};

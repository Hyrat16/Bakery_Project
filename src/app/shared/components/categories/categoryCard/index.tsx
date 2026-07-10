import styles from "./index.module.css";
import { type Dispatch, type SetStateAction } from "react";

export interface CardCategoryProps {
  categoryActive: string;
  activeCall: Dispatch<SetStateAction<string>>;
  category: string;
}

export const CardCategory = ({
  categoryActive,
  activeCall,
  category,
}: CardCategoryProps) => {
  const isActive = categoryActive === category;

  return (
    <div className={styles.categories}>
      <div
        className={`${styles.cat} ${isActive ? styles.active : ""}`}
        onClick={() => activeCall(category)}
      >
        {category}
      </div>
    </div>
  );
};

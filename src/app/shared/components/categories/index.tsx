import { CardCategory } from "./categoryCard";
import { useCategory } from "../../hooks/useCategory";
import styles from "./categoryCard/index.module.css";
import { type Dispatch, type SetStateAction } from "react";

interface ProductsProps {
  categoryActive: string;
  activeCall: Dispatch<SetStateAction<string>>;
}

export const CategoryList = ({ categoryActive, activeCall }: ProductsProps) => {
  const categories = useCategory();

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <CardCategory
          key={category}
          category={category}
          categoryActive={categoryActive}
          activeCall={activeCall}
        />
      ))}
    </div>
  );
};

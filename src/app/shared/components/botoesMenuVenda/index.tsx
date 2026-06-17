import styles from "./index.module.css";

interface NumPros {
  valueItens: number;
}

export const Botoes = ({ valueItens }: NumPros) => {
  return (
    <>
      <div className={styles.itemQtd}>
        <button className={styles.btnQtd}>−</button>
        <span className={styles.qtdNum}>{valueItens}</span>
        <button className={styles.btnQtd}>+</button>
      </div>
    </>
  );
};

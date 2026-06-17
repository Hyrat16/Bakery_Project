import styles from "./index.module.css";

export interface ListagemProdutosProps {
  categoriaAtiva: string;
  setCategoriaAtiva: any;
}

export const Categorias = ({
  categoriaAtiva,
  setCategoriaAtiva,
}: ListagemProdutosProps) => {
  const listaCategorias = [
    "Todos",
    "Paes",
    "Salgados",
    "Doces",
    "Bebidas",
    "Frios",
  ];

  return (
    <div className={styles.categorias}>
      {listaCategorias.map((categoria) => (
        <div
          key={categoria}
          className={`${styles.cat} ${categoriaAtiva === categoria ? styles.ativo : ""}`}
          onClick={() => setCategoriaAtiva(categoria)}
        >
          {categoria}
        </div>
      ))}
    </div>
  );
};

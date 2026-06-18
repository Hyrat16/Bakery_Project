import styles from "./index.module.css";

export interface ListagemProdutosProps {
  categoriaAtiva: string;
  chamadaCategoria: (categoria: string) => void;
}

export const Categorias = ({
  categoriaAtiva,
  chamadaCategoria,
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
          onClick={() => chamadaCategoria(categoria)}
        >
          {categoria}
        </div>
      ))}
    </div>
  );
};

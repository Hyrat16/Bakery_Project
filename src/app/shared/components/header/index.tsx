import styles from "./index.module.css";
import { useClock } from "../../hooks/useClock";
import { useNavigate } from "react-router-dom";

/* 
 AQUI EU VOU RECEBER UM USECONTEXT QUE VIRA COM AS INFOS DE VENDA
*/
const usePreços = "2";

const chamarOFechamentoDoCaixa = () => {
  console.log("TESTE OK");
};

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            🥐 Padaria Dona Clara
          </div>
          <span className={styles.btnFechar} onClick={() => navigate(-1)}>
            Voltar
          </span>
        </div>
        <div className={styles.topbarRight}>
          <span>
            Dia: <b> {useClock("EEEE")} </b>
          </span>
          <span>
            Abertura: <b>{useClock("HH:mm")}</b>
          </span>
          <span>
            Vendas hoje: <b>{usePreços}</b>
          </span>
          <button
            className={styles.btnFechar}
            onClick={chamarOFechamentoDoCaixa}
          >
            Registrar Caixa
          </button>
        </div>
      </header>
    </>
  );
};

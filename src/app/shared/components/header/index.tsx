import styles from "./index.module.css";
import { useClock } from "../../hooks/useClock";
import { useNavigate } from "react-router-dom";

/*
  AQUI EU VOU RECEBER UM USECONTEXT QUE VIRA COM AS INFOS DE VENDA
*/
const usePrices = "2";

const handleRegisterCashier = () => {
  console.log("TESTE OK");
};

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          🥐 Padaria Dona Clara
        </div>
        <span className={styles.closeButton} onClick={() => navigate(-1)}>
          Voltar
        </span>
      </div>
      <div className={styles.topBarRight}>
        <span>
          Dia: <b>{useClock("EEEE")}</b>
        </span>
        <span>
          Abertura: <b>{useClock("HH:mm")}</b>
        </span>
        <span>
          Vendas hoje: <b>{usePrices}</b>
        </span>
        <button className={styles.closeButton} onClick={handleRegisterCashier}>
          Registrar Caixa
        </button>
      </div>
    </header>
  );
};

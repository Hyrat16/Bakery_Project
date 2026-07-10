import styles from "./index.module.css";
import { useSalesItens } from "../../../hooks";
import { useState, useEffect, useCallback } from "react";
import { useFormatCurrency } from "../../../hooks/useFormatCurrency";

export interface IDadosPedido {
  subtotal: number;
  discount: number;
  total: number;
}

// tipagem das props do componente filho
export interface IResumoPedidoProps {
  onDadosAtualizados: (dados: IDadosPedido) => void;
}
export const Summary = ({ onDadosAtualizados }: IResumoPedidoProps) => {
  const { currentSalesList } = useSalesItens();
  const [discount, setDiscount] = useState<number>(0);
  const formattedCurrency = useFormatCurrency();

  const numbersCurrentList = currentSalesList
    .map((p) => p.valueTotal)
    .reduce((ac, num) => {
      if (ac == undefined || num == undefined) {
        return 0;
      }
      return Number(Number(ac) + Number(num));
    }, 0);

  const capturingDiscountValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDiscount(Number(e.target.value));
  };

  const totalPurchaseAmount = useCallback((): number => {
    if (numbersCurrentList == undefined) return 0;
    if (discount > Number(numbersCurrentList)) return 0;
    return Number(numbersCurrentList) - discount;
  }, [numbersCurrentList, discount]);

  useEffect(() => {
    const dados: IDadosPedido = {
      subtotal: Number(numbersCurrentList),
      discount,
      total: totalPurchaseAmount(),
    };

    onDadosAtualizados(dados);
  }, [discount, numbersCurrentList, onDadosAtualizados, totalPurchaseAmount]);

  /* const valueFullCurrency = numbersCurrentList.reduce((ac, num) => {
    if (ac == undefined || num == undefined) {
      return 0;
    }
    return Number(ac) + Number(num);
  }, 0); 

  const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(numbersCurrentList)); */

  return (
    <>
      <div className={styles.summary}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>

          <span>{formattedCurrency(Number(numbersCurrentList))}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Desconto</span>
          <input
            type="text"
            placeholder="Desconto"
            onChange={capturingDiscountValueChange}
          />
        </div>
        <div className={styles.summaryTotal}>
          <span>Total</span>
          <span>{formattedCurrency(totalPurchaseAmount())}</span>
        </div>
      </div>
      ;
    </>
  );
};

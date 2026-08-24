import styles from "./index.module.css";
import { type IsaleData } from "../summary";
import { useFormatCurrency } from "../../../hooks/useFormatCurrency";
import { useState } from "react";
import { type ProductCart } from "../../../types";

export interface IPaymentProps {
  data: IsaleData;
  currentSalesList: ProductCart[];
}

export const Payment = ({ data, currentSalesList }: IPaymentProps) => {
  const [activo, setActivo] = useState<string>("");
  const [AmountReceived, setAmountReceived] = useState<number>(0);
  const { total, isValid, subtotal, discount } = data;
  const formattedCurrency = useFormatCurrency();
  const listProducts = currentSalesList;

  const totalAmountReceivedFromTheSale = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = Number(e.target.value);
    setAmountReceived(Number(newValue));
    return newValue;
  };

  const changeCalculation = (valueAmount: number) => {
    const totalNumber = Number(total);

    if (typeof valueAmount !== "number" || isNaN(valueAmount)) {
      return isPaymentDisabled;
    }

    if (valueAmount < totalNumber) return "Valor insuficiente";
    const change = valueAmount - totalNumber;

    return formattedCurrency(change);
  };

  const isPaymentDisabled =
    !isValid || !activo || AmountReceived < total || subtotal === 0;

  //Dados finais dos itens de todas vendas realizadas no caixa para mandar pro back - end para salvarmos
  const finalSaleData = () => {
    const saleData = listProducts.map((e) => {
      const listSalesItemData = {
        id: e.id,
        category: e.category,
        quantity: e.quantity,
        unitValue: e.unitValue,
        valueTotal: e.valueTotal,
      };

      return listSalesItemData;
    });

    //Dado final com as informaçoes necessarias com acesso ao item e valores
    const itemFinalSaleData = {
      ActualSaleValue: subtotal,
      total: total,
      discount: discount || 0,
      prods: saleData,
    };
    console.log(itemFinalSaleData);
    return itemFinalSaleData;
  };

  return (
    <div className={styles.payment}>
      <div className={styles.paymentLabel}>Forma de pagamento</div>
      <div className={styles.paymentMethods}>
        <div
          className={`${styles.paymentMethod} ${activo === "dinheiro" ? styles.active : ""}`}
          onClick={() => setActivo("dinheiro")}
        >
          <span>💵</span>Dinheiro
        </div>

        <div
          className={`${styles.paymentMethod} ${activo === "cartao" ? styles.active : ""}`}
          onClick={() => setActivo("cartao")}
        >
          <span>💳</span>Cartão
        </div>

        <div
          className={`${styles.paymentMethod} ${activo === "pix" ? styles.active : ""}`}
          onClick={() => setActivo("pix")}
        >
          <span>📱</span>Pix
        </div>
      </div>

      <div className={styles.changeRow}>
        <input
          className={styles.changeInput}
          type="text"
          placeholder="Recebido: R$ 0,00"
          onChange={totalAmountReceivedFromTheSale}
        />
        <span className={styles.changeResult}>
          Troco:{" "}
          {AmountReceived === 0
            ? formattedCurrency(0)
            : changeCalculation(AmountReceived)}
        </span>
      </div>

      <button
        className={styles.checkoutButton}
        onClick={finalSaleData}
        disabled={isPaymentDisabled}
      >
        <span>✓</span> Finalizar Venda · {formattedCurrency(Number(total))}
      </button>
    </div>
  );
};

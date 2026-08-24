import styles from "./index.module.css";
import { useSalesItens } from "../../../hooks";
import { useState, useEffect, useCallback } from "react";
import { useFormatCurrency } from "../../../hooks/useFormatCurrency";

export interface IsaleData {
  subtotal: number;
  discount?: number;
  total: number;
  isValid: boolean;
}
export interface IResumoPedidoProps {
  onDataUpdated?: (data: IsaleData) => void;
}

//
export const Summary = ({ onDataUpdated }: IResumoPedidoProps) => {
  const { currentSalesList } = useSalesItens();
  //const [discount, setDiscount] = useState<number>();
  const [discountText, setDiscountText] = useState<string>("");
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
    const text = e.target.value;

    if (/^\d*,?\d*$/.test(text)) {
      setDiscountText(text);
    }
  };

  const discount: number | undefined =
    discountText === "" ? undefined : Number(discountText.replace(",", "."));

  const totalPurchaseAmount = useCallback((): number => {
    const effectiveDiscount = discount ?? 0;
    return Number(numbersCurrentList) - effectiveDiscount;
  }, [numbersCurrentList, discount]);

  const discountError =
    discount !== undefined && discount > Number(numbersCurrentList)
      ? "Verifique o desconto!"
      : null;

  useEffect(() => {
    const dataUpt: IsaleData = {
      subtotal: Number(numbersCurrentList),
      discount,
      total: totalPurchaseAmount(),
      isValid: discountError === null,
    };

    onDataUpdated?.(dataUpt);
  }, [
    discount,
    numbersCurrentList,
    totalPurchaseAmount,
    onDataUpdated,
    discountError,
  ]);

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
            value={discountText}
            onChange={capturingDiscountValueChange}
          />
        </div>
        <div className={styles.summaryTotal}>
          <span>Total</span>
          <span>{formattedCurrency(totalPurchaseAmount())}</span>
        </div>
        {discountError && (
          <div className={styles.summaryTotal}>{discountError}</div>
        )}
      </div>
    </>
  );
};

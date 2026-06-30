import { CardSaleItem } from "./cardSalemItem";
import { useSalesItens } from "../../hooks";

export const SalesItens = () => {
  const { currentSalesList } = useSalesItens();

  return (
    <>
      {currentSalesList.map((p) => (
        <CardSaleItem key={p.id} prods={p} />
      ))}
    </>
  );
};

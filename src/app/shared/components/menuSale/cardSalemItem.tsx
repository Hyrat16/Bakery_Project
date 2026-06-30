import { type ProductCart } from "../../types";
import { Buttons } from "./buttons";
import "../menuSale/buttons/index.module.css";
import { useSalesItens } from "../../hooks";

interface Product {
  prods: ProductCart;
}

export const CardSaleItem = ({ prods }: Product) => {
  const totalItens = Number(prods.valorUn) * prods.quantidade;
  const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalItens);
  const { updateItem} =
    useSalesItens();

  return (
    <>
      <div className="item-venda">
        <div className="item-emoji">{prods.emoji}</div>
        <div className="item-info">
          <div className="item-nome">{prods.nome}</div>
          <div className="item-unit">{`R$ ${prods.valorUn} / ${prods.unidade}`}</div>
        </div>

        <Buttons
          onQuantidadeChange={(novaQtd) => updateItem(prods.id, novaQtd)}
          produtoId={prods.id}
          valueItens={prods.quantidade}
          
        />
        <div className="item-total">{formatCurrency}</div>
      </div>
    </>
  );
};

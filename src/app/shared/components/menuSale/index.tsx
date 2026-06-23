import { type Produto, type ProductCart } from "../../types";



/* 
<div className="item-venda">
            <div className="item-emoji">🥖</div>
            <div className="item-info">
              <div className="item-nome">Pão Francês</div>
              <div className="item-unit">R$ 0,75 / un</div>
            </div>
            <Buttons valueItens={5} />
            <div className="item-total">R$ 4,50</div>
          </div>

*/
export const CardSaleItem = (prods : ProductCart) => {

<div className="item-venda">
            <div className="item-emoji">🥖</div>
            <div className="item-info">
              <div className="item-nome">{prods.nome}</div>
              <div className="item-unit">`${}``</div>
            </div>
            <Buttons valueItens={5} />
            <div className="item-total">R$ 4,50</div>
          </div>




    return (

    )
}  

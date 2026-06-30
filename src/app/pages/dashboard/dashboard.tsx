import { useState } from "react";
import { CategoryList } from "../../shared/components/categories";
import { ListProdutos } from "../../shared/components/listProducts";
import { SalesItens } from "../../shared/components/menuSale";
import { useSalesItens } from "../../shared/hooks";
import "./index.css";

export const Home = () => {
  const [activeCategory, setactiveCategory] = useState<string>("Todos");
  const [productActive, setproductActive] = useState<string>("");
  const { currentSalesList, handleAdicionarProduto } = useSalesItens();

  return (
    <>
      <section className="painel-produtos">
        <div className="search-bar">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Buscar produto..."
            onChange={(e) => {
              setproductActive(e.target.value);
              //buscaProdutoAtivo(productActive);
            }}
          />
        </div>

        <CategoryList
          categoryActive={activeCategory}
          activeCall={setactiveCategory}
        />

        <div className="grid-produtos">
          <ListProdutos
            categoriaAtiva={activeCategory}
            produtoAtivo={productActive}
            onSelecionarProduto={handleAdicionarProduto}
          />
        </div>
      </section>

      {console.log(currentSalesList)}

      <aside className="painel-carrinho">
        <div className="carrinho-header">
          <h2>Venda atual</h2>
          <span className="badge-itens">{currentSalesList.length | 0}</span>
        </div>

        <div className="carrinho-lista">{<SalesItens />}</div>

        <div className="resumo">
          <div className="resumo-linha">
            <span>Subtotal</span>
            <span>R$ 18,00</span>
          </div>
          <div className="resumo-linha">
            <span>Desconto</span>
          </div>
          <div className="resumo-total">
            <span>Total</span>
            <span>R$ 18,00</span>
          </div>
        </div>

        <div className="pagamento">
          <div className="pagamento-label">Forma de pagamento</div>
          <div className="formas">
            <div className="forma">
              <span>💵</span>Dinheiro
            </div>
            <div className="forma ativa">
              <span>💳</span>Cartão
            </div>
            <div className="forma">
              <span>📱</span>Pix
            </div>
          </div>

          <div className="troco-row">
            <input
              className="troco-input"
              type="text"
              placeholder="Recebido: R$ 0,00"
            />
            <span className="troco-result">Troco: R$ 2,00</span>
          </div>

          <button className="btn-finalizar">
            <span>✓</span> Finalizar Venda · R$ 18,00
          </button>
        </div>
      </aside>
    </>
  );
};

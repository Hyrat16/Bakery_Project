import { useState } from "react";
import { CategoryList } from "../../shared/components/categorias";
import { ListProdutos } from "../../shared/components/listaProdutos";
import { Botoes } from "../../shared/components/botoesMenuVenda";
import { type Produto } from "../../shared/types";

//import { buscaProdutoAtivo } from "../../functions/pesquisas/pesquisa";
import "./index.css";

export const Home = () => {
  const [activeCategory, setactiveCategory] = useState("Todos");
  const [productActive, setproductActive] = useState<string>("");
  const [currentSalesList, setcurrentSalesList] = useState<Produto[]>([]);

  const handleAdicionarProduto = (produto: Produto) => {
    setcurrentSalesList((prev) => [...prev, produto]);
    return currentSalesList;
  };

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

      {console.log(handleAdicionarProduto)}
      <aside className="painel-carrinho">
        <div className="carrinho-header">
          <h2>Venda atual</h2>
          <span className="badge-itens">{[currentSalesList].length | 0}</span>
        </div>

        <div className="carrinho-lista">
          <div className="item-venda">
            <div className="item-emoji">🥖</div>
            <div className="item-info">
              <div className="item-nome">Pão Francês</div>
              <div className="item-unit">R$ 0,75 / un</div>
            </div>
            <Botoes valueItens={5} />
            <div className="item-total">R$ 4,50</div>
          </div>

          <div className="item-venda">
            <div className="item-emoji">🥖</div>
            <div className="item-info">
              <div className="item-nome">Pão Francês</div>
              <div className="item-unit">R$ 0,75 / un</div>
            </div>
            <Botoes valueItens={5} />
            <div className="item-total">R$ 4,50</div>
          </div>

          <div className="item-venda">
            <div className="item-emoji">🥖</div>
            <div className="item-info">
              <div className="item-nome">Pão Francês</div>
              <div className="item-unit">R$ 0,75 / un</div>
            </div>
            <Botoes valueItens={5} />
            <div className="item-total">R$ 4,50</div>
          </div>

          <div className="item-venda">
            <div className="item-emoji">☕</div>
            <div className="item-info">
              <div className="item-nome">Café Expresso</div>
              <div className="item-unit">R$ 4,00 / un</div>
            </div>
            <Botoes valueItens={5} />
            <div className="item-total">R$ 8,00</div>
          </div>

          <div className="item-venda">
            <div className="item-emoji">🥐</div>
            <div className="item-info">
              <div className="item-nome">Croissant</div>
              <div className="item-unit">R$ 5,50 / un</div>
            </div>
            <Botoes valueItens={5} />
            <div className="item-total">R$ 5,50</div>
          </div>
        </div>

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

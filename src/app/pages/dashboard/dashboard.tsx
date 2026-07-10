import { useState } from "react";
import { CategoryList } from "../../shared/components/categories";
import { ProductList } from "../../shared/components/listProducts";
import { SalesItens } from "../../shared/components/menuSale";
import { useSalesItens } from "../../shared/hooks";
import { Summary } from "../../shared/components/payment/summary/index.tsx";
import { Payment } from "../../shared/components/payment/paymentCard.tsx";
import "./index.css";

export const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [activeProduct, setActiveProduct] = useState<string>("");
  const { currentSalesList, handleAddProduct } = useSalesItens();

  return (
    <>
      <section className="productsPanel">
        <div className="searchBar">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Buscar produto..."
            onChange={(e) => setActiveProduct(e.target.value)}
          />
        </div>

        <CategoryList
          categoryActive={activeCategory}
          activeCall={setActiveCategory}
        />

        <div className="productsGrid">
          <ProductList
            activeCategory={activeCategory}
            activeProduct={activeProduct}
            onSelectProduct={handleAddProduct}
          />
        </div>
      </section>

      {console.log(currentSalesList)}

      <aside className="cartPanel">
        <div className="cartHeader">
          <h2>Venda atual</h2>
          <span className="itemsBadge">{currentSalesList.length}</span>
        </div>

        <div className="cartList">
          <SalesItens />
        </div>

        {<Summary />}

        {<Payment />}
      </aside>
    </>
  );
};

//import styles from "./index.module.css";

export const Payment = () => {
  return (
    <>
      <div className="payment">
        <div className="paymentLabel">Forma de pagamento</div>
        <div className="paymentMethods">
          <div className="paymentMethod">
            <span>💵</span>Dinheiro
          </div>
          <div className="paymentMethod active">
            <span>💳</span>Cartão
          </div>
          <div className="paymentMethod">
            <span>📱</span>Pix
          </div>
        </div>

        <div className="changeRow">
          <input
            className="changeInput"
            type="text"
            placeholder="Recebido: R$ 0,00"
          />
          <span className="changeResult">Troco: R$ 2,00</span>
        </div>

        <button className="checkoutButton">
          <span>✓</span> Finalizar Venda · R$ 18,00
        </button>
      </div>
      ;
    </>
  );
};

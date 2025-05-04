
import { Link } from "react-router-dom";
import styles from "./cart.module.scss"
import { Button } from "../../components/ui/Button";
import placaDeVideo from '../../assets/placaDeVideo.webp';
import { CloseOutlined } from "@ant-design/icons";

function Cart() {

  const emptyCart = false; // Simulando que o carrinho está vazio

  return (
    <div className={styles.container}>
      <h1>Carrinho de compras</h1>
      {emptyCart ? (
        <div className={styles.emptyCart}>
          <p>Seu carrinho esta vazio</p>
          <Link to="/" >
            <Button>
              Continuar comprando
            </Button>
          </Link>

        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.cartItems}>
            <div className={styles.cartItem}>
              <Link to="/product/1" className={styles.productInfo}>
                <img src={placaDeVideo} alt="Produto 1" />
                <div>
                  <h3>Titulo do Produto</h3>
                  <p>Descrição do produto</p>
                  <span className={styles.price}>R$ 500</span>
                </div>
              </Link>

              <button className={styles.removeButton}>
                <CloseOutlined />
              </button>
            </div>
          </div>
          <div className={styles.summary}>
            <h2>Resumo do pedido</h2>
            <div className={styles.summaryContent}>
              <div className={styles.summaryItem}>
                <span>Subtotal</span>
                <span>R$ 500</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Fréte Gratis</span>
                <span>R$ 00.00</span>
              </div>
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>R$ 500</span>
              </div>
            
            <Button>
              Finalizar Compra
            </Button>

              <Link to="/">
                <Button variant="secondary" fullWidth>
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>


  )
}

export default Cart;

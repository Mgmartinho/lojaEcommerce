import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import style from "./success.module.scss";
import placaDeVideos from "../../assets/placaDeVideo.webp";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

function Success() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <CheckCircleOutlined className={style.icon} />
        <h1> Pagamento Confirmado!</h1>
        <p> Obrigado por sua compra.</p>

        <div className={style.orderInfo}>
          <h2>Resumo do Pedido</h2>

          <div className={style.items}>
            <div className={style.item}>
              <img src={placaDeVideos} alt="placaDeVideos" />
              <div className={style.itemInfo}>
                <h3>Titulo</h3>
                <span> R$ 500.00</span>
              </div>
            </div>

            <div className={style.total}>
              <strong>Total:</strong>
              <strong>R$ 500.00</strong>
            </div>
          </div>
        </div>
        <Link to="/">
          <Button>
            <HomeOutlined />
            Voltar para home.
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Success;

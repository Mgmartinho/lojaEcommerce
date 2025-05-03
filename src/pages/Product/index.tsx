
import styles from "./product.module.scss"

import placaDeVideos from "../../assets/placaDeVideo.webp"
import processadorAmd5 from "../../assets/processadoramd5.webp"

import { Button } from "../../components/ui/Button";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ProductCard } from "../../components/ProductCard";


function Product() {

  const isInCart = false; // Simulando o estado do carrinho, você pode substituir isso pela lógica real do seu aplicativo.

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img src={placaDeVideos} alt="" />
        </div>

        <div className={styles.info}>
          <h1>nome do produto</h1>
          <p className={styles.description}>Minha descrição</p>
          <span className={styles.price}> R$ 500</span>

          <div className={styles.details}>
            <h2>descição</h2>
            <p>Descrição detalhada do produto</p>

            <ul>
              <li>garantia de 12 meses</li>
              <li>frete Gratis</li>
              <li>Produtos Fabricado no Brasil</li>
              <li>Suporte rapido por telefone</li>
            </ul>
          </div>

          <div className={styles.actions}>
            <Button
              variant={isInCart ? "danger" : "primary"}
            >
              {isInCart ?
                (
                  <>
                    <CloseOutlined />
                    "Remover do Carrinho" :
                  </>
                ) : (
                  <>
                    <ShoppingCartOutlined />
                    "Adicionar ao Carrinho"
                  </>
                )
              }
            </Button>
          </div>
        </div>

      </div>
      <div className={styles.relatedProducts}>
        <h2>Produtos Relacionados</h2>
        <div className={styles.corroussel}>
          <ProductCard
            title="GPU RTX 4080 S"
            description="Placa NVIDEA"
            price={3299.99}

            imageUrl={placaDeVideos}
          />

          <ProductCard
            title="Processador AMD Ryzen 5"
            description=" Processador AMD"
            price={999.99}
            isInCart
            imageUrl={processadorAmd5}
          />
        </div>
      </div>

    </div>
  )
}

export default Product
  ;


import style from "./home.module.scss"
import { ProductCard } from "../../components/ProductCard";
import placaDeVideo from '../../assets/placaDeVideo.webp';
import processadorAmd5 from '../../assets/processadoramd5.webp';

function Home
  () {
  return (
    <div className={style.container}>

      <div className={style.banner}>
        <h1>E-commerce Developer</h1>
      </div>
      <div className={style.products}>
        <ProductCard
          id="1"
          title="GPU RTX 4080 S"
          description="Placa NVIDEA"
          price={3299.99}
          imageUrl={placaDeVideo}
          isInCart
        />


        <ProductCard
          title="Processador AMD Ryzen 5"
          description=" Processador AMD"
          price={999.99}
          isInCart
          imageUrl={processadorAmd5}
        />

        <ProductCard
          title="GPU RTX 4080 S"
          description="Placa NVIDEA"
          price={3299.99}

          imageUrl={placaDeVideo}
        />

        <ProductCard
          title="GPU RTX 4080 S"
          description="Placa NVIDEA"
          price={3299.99}
          imageUrl={placaDeVideo}
          isInCart
        />

        <ProductCard
          title="GPU RTX 4080 S"
          description="Placa NVIDEA"
          price={3299.99}

          imageUrl={placaDeVideo}
        />
      </div>

    </div>
  )
}

export default Home;

import style from "./home.module.scss"
import { ProductCard } from "../../components/ProductCard";
import placaDeVideo from '../../assets/placaDeVideo.webp';
import processadorAmd5 from '../../assets/processadoramd5.webp';
import waterCooler from '../../assets/waterColler.webp';
import placaMaeAsusCrossHair from '../../assets/placaMaeAsusCrossHair.jpg';



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
          description="GPU NVIDEA"
          price={3299.99}
          imageUrl={placaDeVideo}
          isInCart
        />


        <ProductCard
          title="Processador AMD Ryzen 5"
          description=" CPU AMD"
          price={1789.99}
          isInCart
          imageUrl={processadorAmd5}
        />

        <ProductCard
          title="Mother Board CrossHair"
          description="MotherBoard"
          price={4379.99}

          imageUrl={placaMaeAsusCrossHair}
        />

        <ProductCard
          title="Water Cooler Asus "
          description="Water Cooler"
          price={2549.99}
          imageUrl={waterCooler}
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
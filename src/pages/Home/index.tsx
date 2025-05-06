
import style from "./home.module.scss"
import { ProductCard } from "../../components/ProductCard";
import { useGetProducts } from "../../hooks/integrations/global/mutations";



function Home() {

  const {data: products} = useGetProducts();

  return (
    <div className={style.container}>

      <div className={style.banner}>
        <h1>E-commerce Developer</h1>
      </div>
      <div className={style.products}>

      {products?.map((product) => (
        <ProductCard
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.prince}
        imageUrl={product.imageUrl}
        
      />
      ))}

      </div>

    </div>
  )
}

export default Home;
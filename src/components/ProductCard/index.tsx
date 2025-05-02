
import { Button } from '../ui/Button';
import styles from './product-card.module.scss';
import {AccountBookTwoTone} from '@ant-design/icons';



interface ProductCardProps {
  
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}


export function ProductCard({
   description, title, price, imageUrl,
}: ProductCardProps) {


  return (
    <div className={styles.productCard}>
      <img
        src={imageUrl}
        alt={title}
        className={styles.productImage}
      />

      <div className={styles.productInfo}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <span className={styles.price}>R$: {price}</span>
        </div>

        <Button > 
          <AccountBookTwoTone/>
          <strong>Adicionar ao Carrinho</strong>
          
        </Button>

      </div>

    </div>



  );
}
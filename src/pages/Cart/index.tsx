
import style from "./cart.module.scss"
import Header from '../../components/Header';

function Cart() {
  return (
    <div className={style.container}>
      <Header/>

      <h1>Cart</h1>
    </div>
  )
}

export default Cart;

import React from 'react'
import style from "./cart.module.scss"

function Cart() {
  return (
    <div className={style.container}>
      <h1>Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  )
}

export default Cart;

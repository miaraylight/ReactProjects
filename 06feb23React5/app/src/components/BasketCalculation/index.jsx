import React from 'react'
import s from './style.module.css'

export default function BasketCalculation({basket, clearBasket}) {
  const totalSum = basket.reduce((acc, {count, price}) => acc + count * price, 0);
  const totalCount = basket.reduce((acc, {count}) => acc + count, 0);
  return (
    <div className={s.card}>
        <p>Summa: {totalSum}</p>
        <p>Count: {totalCount}</p>
        <div>
            <button onClick={clearBasket}>Clear Basket</button>
        </div>
    </div>
  )
}

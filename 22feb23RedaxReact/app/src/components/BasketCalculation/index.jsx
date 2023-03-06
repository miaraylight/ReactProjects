import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'


export default function BasketCalculation() {
    const basket = useSelector(state => state.basket);
    const products = useSelector(state => state.products);
    const totalCount = basket.reduce((acc, {count}) => acc + count, 0)

    const basketDescr = basket.map(item => {
        const product = products.find(({id}) => id === item.id);
        return {...item, ...product}
      })

      
      const totalSum = basketDescr.reduce(
        (acc, {count, price, discount}) => acc + (price - price * discount / 100) * count, 0
      );
      
      //вывести общую сумму скидки
      const totalDiscount = basketDescr.reduce(
        (acc, {count, price, discount}) => acc + (price * discount / 100) * count, 0
      
      );

  return (
    <div className={s.card}>
        <p>Total count: {totalCount}</p>
        <p>Total price: {totalSum}</p>
        <p>Total discount {totalDiscount}</p>
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../BasketItem'
import s from './style.module.css'

export default function BasketList() {

    // const basket = useSelector(state => state.basket)
    // const product = useSelector(state => state.products)
    const {basket, products} = useSelector(state => state)

    const basketDescr = basket.map(item => {
      const product = products.find(({id}) => id === item.id);
      return {...item, ...product}
    })

  

  return (
    <div className={s.card}>
        {
            basketDescr.map(item => <BasketItem key={item.id} {...item}/>)
        }
    </div>
  )
}

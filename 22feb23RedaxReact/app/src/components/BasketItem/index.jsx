import React from 'react'
import { useDispatch } from 'react-redux'
import { decBasketAction, incBasketAction, removeBasketAction } from '../../store/reducer/basketReducer'
import s from './style.module.css'

export default function BasketItem({id, title, price, discount, count}) {
    const dispatch = useDispatch()
    const newDiscount = price/discount;
    const discPrice = (price - newDiscount).toFixed(2);
    //const discPrice = (price - price * discount/100).toFixed(2)
  return (
    <div className={s.card}>
        <p>Title: {title}</p>
        <p>Price: {discPrice} x {count} = {discPrice*count}</p>
        <p>count: {count}</p>
        <div className={s.btns}>
            <button onClick={()=> dispatch(incBasketAction(id))}>+</button>
            <button onClick={()=> dispatch(decBasketAction(id))}>-</button>
        </div>
        <button onClick={()=> dispatch(removeBasketAction(id))}>Delete</button>
    </div>
  )
}

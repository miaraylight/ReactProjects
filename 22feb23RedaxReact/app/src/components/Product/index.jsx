import React from 'react'
import { useDispatch } from 'react-redux';
import { addBasketAction } from '../../store/reducer/basketReducer';
import { deleteProductAction } from '../../store/reducer/productReducer';
import s from './style.module.css'


export default function Product({id, title, price, discount}) {
    const dispatch = useDispatch()

    
  return (
      <div className={s.card}>
          <div>
              <p>Title: {title}</p>
              <p>Price: {price}</p>
              <p>Discount: {discount}</p>
          </div>
          <div>
              <button onClick={() => dispatch(deleteProductAction(id))}>Delete</button>

              <button onClick={() => dispatch(addBasketAction(id))}>Add to Basket</button>
          </div>
      </div>
  )
}

import React from 'react'
import s from './style.module.css'

export default function Product({id, title, description, price, images, imageIndex, deleteProduct, addToBasket, changePhoto}) {
  return (

    <div className={s.card}>

      <div>
        <img onClick={() => changePhoto(id)} src={images[imageIndex % images.length]} alt={title} className={s.img} />
      </div>

      <div className={s.info}>

        <p className={s.title}>{title}</p>
        <p className={s.descr}>{description}</p>

        <div className={s.price_block}>

          <p>{price}$</p>

          <div className={s.btns}>
            <button onClick={() => deleteProduct(id)}>Delete</button>
            <button onClick={() => addToBasket(id)}>Add</button>
          </div>

        </div>

      </div>

    </div>
  )
}

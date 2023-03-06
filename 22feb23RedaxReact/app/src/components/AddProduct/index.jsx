import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../store/reducer/productReducer';
import s from './style.module.css'

export default function AddProduct() {

    const dispatch = useDispatch()

    const onSubmit=(e)=>{
        e.preventDefault()
        const { title, price, discount } = e.target;


        // dispatch({type: "ADD", payload: {
        //     id: Date.now(),
        //     title: title.value, 
        //     price: price.value, 
        //     discount: discount.value
        // }});

        dispatch(addProductAction(title.value,  price.value, discount.value))

        title.value = ''; 
        price.value = ''; 
        discount.value = '';
    }

  return (
    <div className={s.wrapper}>
        <form className={s.form} onSubmit={onSubmit}>
            <input type="text" name="title" placeholder='Title'/>
            <input type="number" name="price" placeholder='Price'/>
            <input type="number" name="discount" placeholder='Discount'/>
            <button>Add</button>
        </form>
    </div>
  )
}

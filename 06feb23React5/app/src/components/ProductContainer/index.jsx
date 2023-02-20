import s from "./style.module.css"
import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product";
import BasketContainer from "../BasketContainer";
import Modal from "../Modal";

export default function ProductContainer() {

    const [products, setProducts] = useState(null);
    const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem('basket')) ?? []);

    useEffect(() => {
      localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])


    useEffect(()=> {
      if (products === null) {
        return
      }
        const products_ids = products.map(({id}) => id);
        setBasket(pre => pre.filter(({id}) => products_ids.includes(id)));
    }, [products]);

    const deleteProduct = (dellId) => setProducts(products.filter(product => product.id !== dellId));

    // const addProduct = (productId) => {
    //     const searchProduct = {...products.find((item) => productId === item.id),count:1};
        
    //     setBasket([...basket, searchProduct]);
    //   };


    const changePhoto = (productId) => {
      products.find(({id}) => id === productId).imageIndex++;
      setProducts([...products])
    }

    const addToBasket = (addId) => {
       
        const productFromBasket = basket.find(({id}) => id === addId)

        if (productFromBasket) {
            productFromBasket.count++;
            setBasket([...basket])
        }else{
            const res = products.find(product => product.id === addId)
            setBasket([...basket, {...res, count: 1}])
        }   
    }

    const increment = (productId) => {
        const target = basket.find(({id})=> id===productId)

        target.price= target.price + target.price;
        setBasket([...basket])
    }

    const decrement = (productId) => {
        const target = basket.find(({id}) =>  id === productId)
        target.count--;
        if (target.count === 0) {
            setBasket(basket.filter(elem => elem !== target))
        } else {
            setBasket([...basket])
        } 
        
        
    }
    
    const clearBasket = () => setBasket([])

    const deleteFromBasket = (value) => {
        setBasket(basket.filter(({id}) => id !== value))
    }
    
    const [modal, setModal] = useState(false)

    const openWindow = () => setModal(true);
    const closeWindow = () => setModal(false);
     
     

  useEffect(()=>{
    (async() => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      const result = data.products.map(({id, title, price, description, images}) => ({id, title, price, description, images, imageIndex: 0}))
      setProducts(result);
    })()
  }, [])

  return (
    <div>
      <button onClick={openWindow}>Open basket({basket.reduce((pre, {count}) => pre + count, 0)})</button>
      {
        modal
          ? <Modal closeWindow={closeWindow}>
            
            <BasketContainer basket={basket}
              increment={increment}
              decrement={decrement}
              clearBasket={clearBasket}
              deleteFromBasket={deleteFromBasket}
            />
          </Modal>
          : ""
      }
        
        
        <div className={s.wrapper}>
        {
          products === null
          ? "Louding"
          : products.map(product => 
        <Product
          key={product.id}
           {...product} 
           deleteProduct={deleteProduct} addToBasket={addToBasket} changePhoto = {changePhoto}
        />
        )
      }
    </div>
    </div>
  )
}

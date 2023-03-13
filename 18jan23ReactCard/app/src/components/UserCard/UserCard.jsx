import React from 'react'
import s from './style.module.css'

export default function UserCard({name, email, phone, address}) {
  return (
    <div className={s.card}>
        <div className={s.top}></div>
        <div className={s.main}>
            <h3>{name}</h3>
            <span>city</span>
            <p>{address.city}</p>
        </div>
        
        <div className={s.contact}>
            <div>
            <span>e-mail:</span> 
            <p>  {email}</p>
            </div>
            <div>
            <span>phone:</span>
            <p>  {phone}</p>
            </div>
            
        </div>
        
    </div>
  )
}

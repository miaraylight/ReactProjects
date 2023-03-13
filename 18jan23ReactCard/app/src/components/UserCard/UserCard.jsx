import React from 'react'

export default function UserCard({name, email, phone, address}) {
  return (
    <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address.city}</p>
    </div>
  )
}

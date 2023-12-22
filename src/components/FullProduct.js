import React from 'react'
import prod from '../product'
const FullProduct = () => {
  return (
    <div>
    <img src={prod.image} alt="" />
    <h1> {prod.title} </h1>
    <h4> {prod.price} </h4>
    <p> {prod.description} </p>

    </div>
  )
}

export default FullProduct
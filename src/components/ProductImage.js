import React from 'react'
import prod from '../product'
const ProductImage = () => {
  return (
    <div>
    <img className='img' src={prod.image} alt="iphone" />
    </div>
  )
}

export default ProductImage

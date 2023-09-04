import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import productData from '../utils'

export default function Mainproduct() {
    let params = useParams()
    const [products] = useState(productData)
    console.log(params);

  return (
    <div>Mainproduct: {products.find(product => product.id == params.productId).title}</div>
  )
}

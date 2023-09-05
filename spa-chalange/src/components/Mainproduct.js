import React, { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {productData} from '../utils'

export default function Mainproduct() {
    let params = useParams()
    const [products] = useState(productData)
    
    let hasProduct = products.some(product => product.id == params.productId)

  return (
    <div>
        {!hasProduct ? (
            <h1>
                Not Find Product
            </h1>
        ) : (
            <>
                Mainproduct: {products.find(product => product.id == params.productId).title}
            </>
        ) 

    }
    </div>
  )
}

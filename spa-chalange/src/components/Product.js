import React, {useState} from 'react'
import {productData} from '../utils'
import { Link } from 'react-router-dom'

export default function Product() {
  const [products] = useState(productData)
  
    return (
    <div>
        {products.map(product =>(
            <React.Fragment key={product.id}>
                <Link to={`/product/${product.id}`}>
                    {product.title}
                </Link>
                <hr/>    
            </React.Fragment>
        ))}
    </div>
  )
}

import React, { useState } from 'react'
import Img from './Img'
import './Card.css'
import Cart from './Cart';

export default function Card() {
    const [products] = useState(
      [
        {id: 1, title: "Jordan", price: "99$", src: "/shoe1.png"},
        {id: 2, title: "Jordan Air", price: "89$", src: "/shoe2.png"},
        {id: 3, title: "Jordan Jump", price: "78$", src: "/shoe3.png"},
        {id: 4, title: "Jordan Air2", price: "64$", src: "/shoe4.png"},
        {id: 5, title: "Jordan Classic", price: "85$", src: "/shoe5.png"},
        {id: 6, title: "Jordan Dj khaled", price: "85$", src: "/shoe6.png"},
        {id: 7, title: "Jordan Man", price: "85$", src: "/shoe7.png"},
        {id: 8, title: "Jordan Sport", price: "85$", src: "/shoe8.png"},
        {id: 9, title: "Jordan Jump2", price: "85$", src: "/shoe9.png"},
        {id: 10, title: "Jordan Air Man", price: "85$", src: "/shoe10.png"},
        {id: 11, title: "Jordan Classic2", price: "85$", src: "/shoe11.png"},
    ],
    )
    const [shoppingCart, setShoppingCart] = useState([])

      const clickHandler = (productId) =>{
        let mainProduct = products.find(product => {
          return product.id === productId
        })

        setShoppingCart(prevState => [...prevState.shoppingCart, mainProduct])
      }
    
      const emptyShoppingCart = () =>{
        setShoppingCart([])
      }

      const removeItemCart = (productId) =>{
        let newShoppingCart = shoppingCart.filter(product => {
          return product.id !== productId
        })

        setShoppingCart(newShoppingCart)
      }

  return (
    <div className='container'>
      <div className='card-items'>
          {products.map((product) => (
                  <div className='card'>
                    <h2>{product.title}</h2>
                    <div className='image-card'>
                      <Img {...product} width={300} height={300}/>
                    </div>
                    <div className='detail'>
                      <p>{product.price}</p>
                      <button onClick={() => clickHandler(product.id)}>
                        ADDTOCART
                      </button>
                    </div>
                  </div>
          ))}      
      </div>
      <div className="cart-items">
          {shoppingCart.map(product => (
            <Cart {...product} onRemoveItem={removeItemCart}/>
          ))}
      </div>
      <div className='reset' onClick={emptyShoppingCart}>
        <button>RESET</button>
      </div>
    </div>
  )

}

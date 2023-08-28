import React from "react";
import Img from "./Img";
import './Cart.css'

export default function Cart(props) {

    const clickHandler = (id) =>{
        props.onRemoveItem(id)
    }

    let {id, title, price, src} = props
    return (
        <div className='cart'>
            <h2>{title}</h2>
            <p>{price}</p>
            <Img src={src} width={60} height={60}/>
            <button className="cancle" onClick={() => clickHandler(id)}>
                Cancle
            </button>
    </div>
    )
}
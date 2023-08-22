import React,{ Component } from "react";
import Img from "./Img";
import './Cart.css'

export default class Cart extends Component{

    render(){
        let {title, price, src} = this.props

        return (
            <div className='cart'>
                <h2>{title}</h2>
                <p>{price}</p>
                <Img src={src} width={60} height={60}/>
                <button className="cancle">
                    Cancle
                </button>
        </div>
        )
    }
}
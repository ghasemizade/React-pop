import React,{ Component } from "react";
import Img from "./Img";
import './Cart.css'

export default class Cart extends Component{

    clickHandler (id){
        this.props.onRemoveItem(id)
    }

    render(){
        let {id, title, price, src} = this.props

        return (
            <div className='cart'>
                <h2>{title}</h2>
                <p>{price}</p>
                <Img src={src} width={60} height={60}/>
                <button className="cancle" onClick={this.clickHandler.bind(this, id)}>
                    Cancle
                </button>
        </div>
        )
    }
}
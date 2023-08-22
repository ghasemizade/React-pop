import React, { Component } from 'react'
import Img from './Img'

export default class Card extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            products: [
                {id: 1, title: "Jordan", price: "99$", src: "./shoe1.png"},
                {id: 2, title: "Jordan Air", price: "89$", src: "./shoe2.png"},
                {id: 3, title: "Jordan Jump", price: "78$", src: "./shoe3.png"},
                {id: 4, title: "Jordan Air2", price: "64$", src: "./shoe4.png"},
                {id: 5, title: "Jordan Classic", price: "85$", src: "./shoe5.png"},
            ]
        }
    }
    


  render() {
    return (
      <div className='card'>
        {this.state.products.map(() => {
                <Img src={this.state.products[0].src}/>  
        })}      
      </div>
    )
  }
}

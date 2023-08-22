import Img from "./Img";
import './Cart.css'

export default function Cart(){
    return (
    <div className="cart">
            <h2>Jorada Air</h2>
            <p>109$</p>
            <Img src={'/shoe1.png'} width={60} height={60}/>
            <button className="cancle">
                Cancle
            </button>
        </div>
    )
}
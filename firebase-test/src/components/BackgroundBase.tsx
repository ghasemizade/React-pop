import imageLeft from "../assets/left-financial.svg"
import imageRight from "../assets/right-financial.svg"
import logo from "../assets/logo.svg"
import '../global.css'

export function BackgroundBase() {
    return(
        <div>
            <img src={logo} alt="logo" className="mt-16 ml-16 w-40" />
            <img src={imageLeft} alt="left-financial" className="background absolute bottom-0 left-0 w-[30rem]" draggable="false"/>
            <img src={imageRight} alt="right-financial" className="background absolute bottom-0 right-0 w-[30rem]" draggable="false"/>
        </div>
        
    )
}
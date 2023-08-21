import clsx from "clsx";
import { useRef } from 'react'

export default function Inputbookdetails({label, placeholder, children, changehandler}){
    const ref = useRef(null)
    const addClass = () =>{
        const div = ref.current
        div.classList.add("border-[#FFB049]")  
    }

    const removeClass = () =>{
        const div = ref.current
        div.classList.remove("border-[#FFB049]")
    }

    
    return (
        <form className={clsx(
            "bg-[#E5E7EB]",
            "mx-40 mt-10",
            "flex justify-start items-center",
            "py-2",
            "border-2",
            "duration-100",
            "rounded"
            )} onFocus={addClass} 
                onBlur={removeClass} 
                ref={ref} 
                onChange={changehandler}>
            <label className={clsx(
                "text-slate-500",
                "ml-2 mr-2",
                "flex justify-between items-center",
                "w-full"
                )} htmlFor={label}>
                {children}
                {label}
                <input id={label} className={clsx( 
                    "bg-[#E5E7EB]",
                    "outline-none",
                    "ml-5",
                    "w-full"
                )} type="text" placeholder={placeholder}/>
            </label>
        </form>
    )
}
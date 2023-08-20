import clsx from 'clsx'
import { useRef } from 'react'

export default function InputSearch({placeholder, label, icon, type}) {


    const ref = useRef(null)
    const addClass = () =>{
        const section = ref.current
        section.classList.add("border-blue-600")  
    }

    const removeClass = () =>{
        const section = ref.current
        section.classList.remove("border-blue-600")
    }

    return(
        <>
            <section className={clsx(
                "input-sec",
                "bg-[#fff]",
                "flex justify-start items-center",
                "w-11/12",
                "rounded",
                "mt-5",
                "border-2",
                "duration-100"
            )} onFocus={addClass} onBlur={removeClass} ref={ref}>
                <label htmlFor={label}>
                    <img className={clsx(
                        "w-6 h-6 mr-4 ml-2"
                    )} src={icon} alt={icon} />
                </label>
                <input className={clsx(
                    "bg-[#fff]",
                    "w-full",
                    "py-3.5",
                    "outline-none"
                )} type={type} placeholder={placeholder} id={label}/>
            </section>
        </>
    )
}
import clsx from 'clsx'
import { useRef } from 'react'

export default function InputSearch({placeholder, label, icon}) {
    const ref = useRef(null)
    const addClass = () =>{
        const section = ref.current
        section.classList.add("border-black")  
    }

    const removeClass = () =>{
        const section = ref.current
        section.classList.remove("border-black")
    }

    return(
        <>
            <section className={clsx(
                "input-sec",
                "bg-slate-200",
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
                    "bg-slate-200",
                    "w-full",
                    "py-3.5",
                    "outline-none"
                )} type="text" placeholder={placeholder} id={label}/>
            </section>
        </>
    )
}
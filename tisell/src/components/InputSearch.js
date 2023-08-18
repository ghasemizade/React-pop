import clsx from 'clsx'
import { useRef } from 'react'

export default function InputSearch({placeholder, label}) {
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={clsx(
                        "w-8 h-8 mx-3 text-gray-500"
                    )} fill="currentColor">
                        <path d="M18,4.48a8.45,8.45,0,0,0-12,12l5.27,5.28a1,1,0,0,0,1.42,0L18,16.43A8.45,8.45,0,0,0,18,4.48ZM16.57,15,12,19.59,7.43,15a6.46,6.46,0,1,1,9.14,0ZM9,7.41a4.32,4.32,0,0,0,0,6.1,4.31,4.31,0,0,0,7.36-3,4.24,4.24,0,0,0-1.26-3.05A4.3,4.3,0,0,0,9,7.41Zm4.69,4.68a2.33,2.33,0,1,1,.67-1.63A2.33,2.33,0,0,1,13.64,12.09Z"/>
                    </svg>
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
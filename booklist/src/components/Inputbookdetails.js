import clsx from "clsx";
import {MdTitle} from 'react-icons/md'

export default function Inputbookdetails({label, placeholder}){
    return (
        <div className={clsx(
            "bg-[#ddd]",
            "mx-40 mt-10",
            "flex justify-start items-center"
            )}>
            <MdTitle/>
            <label htmlFor={label}>
                {label}
                <input id={label} className={clsx( 
                    "bg-[#ddd]"
                )} type="text" placeholder={placeholder}/>
            </label>
        </div>
    )
}
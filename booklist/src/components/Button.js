import clsx from "clsx";
import { BiBookAdd } from 'react-icons/bi'

export default function Button(){
    return (
            <button className={clsx(
                "flex justify-center items-center",
                "rounded",
                "p-3 mt-10",
                "bg-[#FFB049]",
                ""
            )}>
                <BiBookAdd className={clsx(
                    "mr-5"
                )}/>
                ADD BOOK
            </button>
    )
}
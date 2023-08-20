import React from 'react'
import {BiSolidBookReader} from "react-icons/bi"
import clsx from 'clsx'

export default function Header(){
    return (
        <header className={clsx(
            "flex justify-center items-center flex-row",
            "text-5xl font-black",
            "mt-10",
            )}>
                <BiSolidBookReader color="#FFB049"/>
            <h1 className={clsx(
                "ml-3",
                "text-[#1E4558]"    
            )}>
                DBOOK
            </h1>
        </header>
    )
}
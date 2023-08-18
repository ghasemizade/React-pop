import clsx from "clsx"
import React from "react"
import Radio from './Radio'
import Input from './InputSearch'

export default function Book() {
    
    return(
        <main className={clsx(
            "flex justify-center items-center flex-col",
            "bg-[#fff]",
            "w-96 h-96",
            "rounded"
        )}>
            <Radio />
            <Input placeholder={'Leaving from...'}/>
            <Input placeholder={'Going to...'}/>
        </main>
    )
}
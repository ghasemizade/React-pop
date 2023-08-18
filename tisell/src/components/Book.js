import clsx from "clsx"
import React from "react"
import Radio from './Radio'
import Input from './InputSearch'

export default function Book() {
    
    return(
        <main className={clsx(
            "flex justify-center items-center flex-col",
            "bg-[#30303036]",
            "w-96 h-96",
            "rounded",
            "backdrop-blur"
        )}>
            <Radio />
            <Input placeholder={'Leaving from...'} label={"leave"}/>
            <Input placeholder={'Going to...'} label={"go"}/>
            <div className={clsx(
                "flex justify-center items-center",
                "px-5"
            )}>
                <Input placeholder={'First name'} label={"firstname"}/>

                <gap className={clsx(
                    "mx-0.5"
                )}></gap>

                <Input placeholder={'Last name'} label={"lastname"}/>
            </div>
        </main>
    )
}
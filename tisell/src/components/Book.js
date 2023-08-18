import clsx from "clsx"
import React from "react"
import Radio from './Radio'
import Input from './InputSearch'

export default function Book() {
    
    return(
        <div className={clsx(
            "flex justify-center items-center flex-col"
        )}>
            <main className={clsx(
            "flex justify-center items-center flex-col",
            "bg-[#30303036]",
            "w-96 h-96",
            "rounded",
            "rounded-b-none",
            "backdrop-blur"
        )}>
            <Radio />
            <Input 
                placeholder={'Leaving from...'} 
                label={"leave"}
                icon={"./location.png"}/>
            <Input 
                placeholder={'Going to...'}
                label={"go"}
                icon={"./location.png"}/>
            <div className={clsx(
                "flex justify-center items-center",
                "px-5"
            )}>
                <Input 
                    placeholder={'First name'}
                    label={"firstname"}
                    icon={"./name.png"}/>

                <gap className={clsx(
                    "mx-0.5"
                )}></gap>

                <Input 
                    placeholder={'Last name'}
                    label={"lastname"}
                    icon={"./name.png"}/>
            </div>
        </main>
        <footer>
            <button className={clsx(
                "bg-blue-600",
                "w-96",
                "rounded-b-md",
                "py-4",
                "text-white text-l"
            )}>SEARCH FLIGHTS</button>
        </footer>
        </div>
    )
}
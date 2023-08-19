import clsx from "clsx"
import React from "react"
import Radio from './Radio'
import Input from './InputSearch'

export default function Book() {
    
    return(
        <div className={clsx(
            "flex justify-center items-center flex-col",
        )}>
            <main className={clsx(
            "flex justify-center items-center flex-col",
            "bg-[#ffffff]",
            "w-96 h-96",
            "rounded",
            "rounded-b-none",
        )}>
            <Radio />
            <Input 
                placeholder={'Leaving from...'} 
                label={"leave"}
                icon={"./location.png"}
                type={"text"}/>
            <Input 
                placeholder={'Going to...'}
                label={"go"}
                icon={"./location.png"}
                type={"text"}/>
            <div className={clsx(
                "flex justify-center items-center",
                "px-4"
            )}>
                <Input 
                    placeholder={'First name'}
                    label={"firstname"}
                    icon={"./name.png"}
                    type={"text"}/>

                <div className={clsx(
                    "gap",
                    "mx-0.5"
                )}></div>

                <Input 
                    placeholder={'Last name'}
                    label={"lastname"}
                    icon={"./name.png"}
                    type={"text"}/>
            </div>
            <div className={clsx(
                "flex justify-center items-center",
                "px-4"
            )}>
                <Input 
                    placeholder={'Depart'}
                    label={"depart"}
                    icon={"./calender.png"}
                    type={"text"}/>

                <gap className={clsx(
                    "mx-0.5"
                )}></gap>

                <Input 
                    placeholder={'Return'}
                    label={"return"}
                    icon={"./calender.png"}
                    type={"text"}/>
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
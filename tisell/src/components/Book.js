import clsx from "clsx"
import React from "react"
import Radio from './Radio'
import Input from './InputSearch'

export default function Book() {
    
    return(
        <div className={clsx(
            "flex justify-between items-center",
            "w-full h-full",
        )}>
            <main className={clsx(
            "flex justify-around items-center flex-col",
            "bg-[#ffffff]",
            "w-full",
            "rounded",
            "rounded-b-md",
            "pt-10"
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
                    "mx-2"
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

                <div className={clsx(
                    "mx-2"
                )}></div>

                <Input 
                    placeholder={'Return'}
                    label={"return"}
                    icon={"./calender.png"}
                    type={"text"}/>
            </div>
            <button className={clsx(
                "bg-blue-600",
                "w-full",
                "rounded-b-md",
                "py-4 mt-10",
                "text-white text-l"
            )}>SEARCH FLIGHTS</button>
        </main>
        </div>
    )
}
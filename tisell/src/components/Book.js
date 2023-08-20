import clsx from "clsx"
import React from "react"
import Radio from './Radio'
import InputFill from './InputSearch'
import Autocomplete from '@mui/joy/Autocomplete';
import Input from '@mui/joy/Input';
import Provinces from '../provinces.json'
import Cities from '../cities.json'

export default function Book() {
    function changeHandler(event){
        let mainProvince = event.target.id
        console.log(mainProvince.lenght);
    }

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
            <div className={clsx(
                "w-full",
                "px-8 mt-5"
            )}>
                <Autocomplete options={Provinces.map(name => name.name)} 
                    placeholder="leaving from..."/>
                <div className={clsx(
                    "my-2"
                )}></div>
                <Autocomplete onChange={changeHandler} options={Provinces.map(name => name.name )} 
                    placeholder="return..."/>
                <div className={clsx(
                    "my-2"
                )}></div>
            </div>
            <div className={clsx(
                "flex justify-center items-center",
                "w-full",
                "px-8"
            )}>
                <InputFill 
                    placeholder={'First name'}
                    label={"firstname"}
                    icon={"./name.png"}
                    type={"text"}/>

                <div className={clsx(
                    "gap",
                    "mx-2"
                )}></div>

                <InputFill 
                    placeholder={'Last name'}
                    label={"lastname"}
                    icon={"./name.png"}
                    type={"text"}/>
            </div>
            <div className={clsx(
                "flex justify-center items-center",
                "w-full",
                "px-8"
            )}>
                <InputFill 
                    placeholder={'Depart'}
                    label={"depart"}
                    icon={"./calender.png"}
                    type={"text"}/>

                <div className={clsx(
                    "mx-2"
                )}></div>

                <InputFill 
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
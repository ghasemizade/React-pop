import clsx from 'clsx';
import { MdTitle } from 'react-icons/md'
import { BsFillPersonFill, BsCalendarDateFill } from 'react-icons/bs'


export default function Book({nameValue, authorValue, yearValue}){

    return (
        <div className={clsx(
            "flex justify-center items-center",
          )}>
            <div className={clsx(
              "w-40 h-44",
              "bg-orange-200",
              "mt-10",
              "text-center text-sm",
              "flex flex-col justify-around items-start",
              "rounded",
              "hover:shadow-lg shadow-gray-300 duration-150"
            )}>
              <div className={clsx(
                "flex items-center",
                "ml-2"
              )}>
                <MdTitle className={clsx(
                  "text-slate-600",
                      )} />
                <h1 className={clsx("ml-2")}>{nameValue}</h1>
              </div>
    
              <div className={clsx(
                "flex items-center",
                "ml-2",
                )}>
                <BsFillPersonFill className={clsx(
                  "text-slate-600",
                      )} />
                <p className={clsx("ml-2")}>{authorValue}</p>
              </div>
              
              <div className={clsx(
                "flex items-center",
                "ml-2"
              )}>
                <BsCalendarDateFill className={clsx(
                  "text-slate-600"
                      )} />
                <p className={clsx("ml-2")}>{yearValue}</p>
              </div>
            </div>
    
    
          </div>
    )
}
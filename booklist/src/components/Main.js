import Inputbookdetails from "./Inputbookdetails";
import { MdTitle } from 'react-icons/md'
import { BsFillPersonFill, BsCalendarDateFill } from 'react-icons/bs'
import clsx from "clsx";
import Button from "./Button";

export default function Main({changehandler, changehandlername, changehandlerauthor, changehandleryear}){
    

    return (
        <>
            <Inputbookdetails label={"Title"} changehandler={changehandlername}>
                <MdTitle className={clsx(
                    "mr-2"
                )} />
            </Inputbookdetails>

            <Inputbookdetails label={"Author"} changehandler={changehandlerauthor}>
                <BsFillPersonFill className={clsx(
                    "mr-2"
                )} />
            </Inputbookdetails>

            <Inputbookdetails label={"Year"} changehandler={changehandleryear}>
                <BsCalendarDateFill className={clsx(
                    "mr-2"
                )} />
            </Inputbookdetails>
            <div className={clsx(
                "flex justify-center items-center"
            )}>
                <Button changehandler={changehandler}/>
            </div>
        </>
    )
}
import Inputbookdetails from "./Inputbookdetails";
import { MdTitle } from 'react-icons/md'
import { BsFillPersonFill, BsCalendarDateFill } from 'react-icons/bs'
import clsx from "clsx";

export default function Main(){
    return (
        <>
            <Inputbookdetails label={"Title"}>
                <MdTitle className={clsx(
                    "mr-2"
                )} />
            </Inputbookdetails>

            <Inputbookdetails label={"Author"}>
                <BsFillPersonFill className={clsx(
                    "mr-2"
                )} />
            </Inputbookdetails>

            <Inputbookdetails label={"Year"}>
                <BsCalendarDateFill className={clsx(
                    "mr-2"
                )} />
            </Inputbookdetails>
        </>
    )
}
import clsx from 'clsx'
import React from 'react'
import { TiTick, TiTrash } from 'react-icons/ti'
import '../index.css'

export default function Todo (props) {

    const removeHandler = (id) =>{
      props.onRemove(id)
    }

    const editClickHandler = (id) =>{
      props.onCompleted(id)
    }

    return (
      <div className={clsx(
        `todo ${props.completed ? 'todo-title' : ''}`,
        "flex justify-between items-center",
        "bg-white",
        "w-80",
        "rounded-lg",
        "mt-3",
      )}>
        <p className={clsx(
            "ml-2",
        )}>{props.title}</p>
        <div className={clsx(
            "flex justify-center items-center",
        )}>
            <TiTick
                className={clsx("bg-green-300", "py-1")} 
                size={30} 
                color='#6366f1' 
                cursor={'pointer'}
                onClick={() => editClickHandler(props.id)}
                />
            <TiTrash
                className={clsx(
                    "bg-red-300",
                    "rounded-r-lg"
                    )} 
                size={30} 
                color='#6366f1' 
                cursor={'pointer'}
                onClick={() => removeHandler(props.id)}/>
        </div>
      </div>
    )
}

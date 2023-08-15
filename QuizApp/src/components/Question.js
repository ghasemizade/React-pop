import React from 'react'
import clsx from 'clsx';


export default function Question({option}) {
  return (
    <li className={clsx(
        "px-10 py-2",
        "border-2",
        "w-full",
        "m-1.5",
        "text-center text-2xl",
        "text-blue-300 bg-blue-900",
        "rounded-full",
        "font-bold",
        "cursor-pointer",
        "hover:bg-orange-400 duration-100",
        "hover:text-blue-900"
    )}>{option}</li>
  )
}
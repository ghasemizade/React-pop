import clsx from 'clsx'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className={clsx(
        "flex justify-center items-center",
        "my-10",
      )}>
        <h1 className={clsx(
            "text-4xl font-light text-white",
            "bg-indigo-500 shadow-lg shadow-indigo-500/50",
            "rounded-xl",
            "p-4",
            "hover:shadow-2xl hover:shadow-indigo-800/60",
            "hover:font-bold duration-200",
        )}>TODO APP</h1>
      </div>
    )
  }
}

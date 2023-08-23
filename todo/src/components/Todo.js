import clsx from 'clsx'
import React, { Component } from 'react'
import { TiTick, TiTrash } from 'react-icons/ti'

export default class Todo extends Component {
  render() {
    return (
      <div className={clsx(
        "flex justify-between items-center",
        "bg-white",
        "w-80",
      )}>
        <p className={clsx(
            "text-left"
        )}>todo</p>
        <div className={clsx(
            "flex justify-center items-center"
        )}>
            <TiTick size={30} color='#6366f1' cursor={'pointer'}/>
            <TiTrash size={30} color='#6366f1' cursor={'pointer'}/>
        </div>
      </div>
    )
  }
}

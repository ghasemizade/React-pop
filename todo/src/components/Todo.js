import clsx from 'clsx'
import React, { Component } from 'react'
import { TiTick, TiTrash } from 'react-icons/ti'
import '../index.css'

export default class Todo extends Component {

    removeHandler (id){
      this.props.onRemove(id)
    }

    completed (id){
      this.props.onCompleted(id)
    }

    render() {
    return (
      <div className={clsx(
        `todo ${this.props.completed ? 'todo-title' : ''}`,
        "flex justify-between items-center",
        "bg-white",
        "w-80",
        "rounded-lg",
        "mt-3",
      )}>
        <p className={clsx(
            "ml-2",
        )}>{this.props.title}</p>
        <div className={clsx(
            "flex justify-center items-center",
        )}>
            <TiTick
                className={clsx("bg-green-300", "py-1")} 
                size={30} 
                color='#6366f1' 
                cursor={'pointer'}
                onClick={this.completed.bind(this, this.props.id)}
                />
            <TiTrash
                className={clsx(
                    "bg-red-300",
                    "rounded-r-lg"
                    )} 
                size={30} 
                color='#6366f1' 
                cursor={'pointer'}
                onClick={this.removeHandler.bind(this, this.props.id)}/>
        </div>
      </div>
    )
  }
}

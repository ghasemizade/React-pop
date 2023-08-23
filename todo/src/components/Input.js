import clsx from 'clsx'
import React, { Component } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'

export default class Input extends Component {

    clickHandler(event){
        console.log(event);
    }
  render() {
    return (
      <div className={clsx(
        "flex justify-center items-center",
        "bg-white",
        "pr-2",
        "rounded-lg",
        "mr-10"
      )}>
        <input className={clsx(
            "outline-none",
            "px-5 py-1",
            "w-full",
            "bg-white",
            "rounded-lg",
        )} type='text' placeholder='Todo...'/>
        <AiFillPlusCircle 
            size={20} 
            color='#6366f1' 
            cursor={'pointer'} 
            onClick={this.clickHandler}/>
      </div>
    )
  }
}

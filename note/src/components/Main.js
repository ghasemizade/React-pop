import React, { Component } from 'react'
import Palete from './Colorpalete'
import clsx from 'clsx'
import { BsPlus, BsEraser } from 'react-icons/bs'
import Notebox from './Notebox';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                "#fff",
                "rgb(249 115 22)",
                "rgb(234 179 8)",
                "rgb(59 130 246)",
                "rgb(34 197 94)",
                "rgb(239 68 68)",
            ],
            notes: [1, 2, 3],
            noteValue: '',
            inputColor: ''
        }

        this.noteHandler = this.noteHandler.bind(this)
    }
    
    noteHandler (event){
        this.setState({
            noteValue: event.target.value
        })
    }

    addClick (prevState){
        this.setState({
            notes: [...prevState]
        })
    }

  render() {
    return (
      <main className={clsx(
        "flex justify-center items-center flex-col"
      )}>
        <div className={clsx(
            "flex justify-center items-center",
            "mt-20",
            "w-2/5",
            "rounded"
        )}>
            <input className={clsx(
                "w-full",
                "py-1 pl-5",
                "outline-none",
                "rounded",
                "text-[#006eff]",
                "font-medium",
            )} type="text" placeholder='note...' onChange={this.noteHandler} />
        </div>
        <div className={clsx(
            "flex justify-between items-baseline",
            "w-2/5"
        )}>
            {this.state.colors.map(color => (
                <Palete color={color} key={color}/>
            ))}
            <div className={clsx(
                "flex justify-center items-center"
            )}>
                <div className={clsx(
                    "border-2 p-2 rounded-full mt-2 mr-2",
                    "border-green-500"
                )} onClick={this.addClick}>
                    <BsPlus size={25} color='#006eff'/>
                </div>
                <div className={clsx(
                    "border-2 p-2 rounded-full mt-2",
                    "border-red-500"
                )}>
                    <BsEraser size={25} color='#006eff'/>
                </div>
            </div>
        </div>
        <div className={clsx(
            "grid grid-cols-3"
        )}>
            {this.state.notes.map(note => (
                <Notebox noteTitle={note}/>
            ))}
        </div>
      </main>
    )
  }
}

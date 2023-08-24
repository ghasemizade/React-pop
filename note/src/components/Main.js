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
            notes: [],
            noteValue: '',
            inputColor: ''
        }


        this.noteHandler = this.noteHandler.bind(this)
        this.colorClickHandler = this.colorClickHandler.bind(this)
        this.addClick = this.addClick.bind(this)
        this.emptyNote = this.emptyNote.bind(this)
    }
    
    noteHandler (event){
        this.setState({
            noteValue: event.target.value
        })
    }

    colorClickHandler (colorClick){
        this.setState({
            inputColor: colorClick
        })
    }

    addClick (){
        let newNote = {
            id: this.state.notes + 1,
            title: this.state.noteValue,
            color: this.state.inputColor
        }
        console.log(newNote);
        this.setState(prevState => {
            return {
                notes: [...prevState.notes, newNote],
                inputColor: '',
                noteValue: ''
            }
        })
    }

    emptyNote (){
        this.setState({
            noteValue: '',
            inputColor: ''
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
                "#fff",
                "font-medium",
            )} type="text"
                placeholder='note...' 
                onChange={this.noteHandler} 
                value={this.state.noteValue} 
                style={{backgroundColor: this.state.inputColor}}/>
        </div>
        <div className={clsx(
            "flex justify-between items-baseline",
            "w-2/5"
        )}>
            {this.state.colors.map(color => (
                <Palete color={color} key={color} onColor={this.colorClickHandler}/>
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
                )} onClick={this.emptyNote}>
                    <BsEraser size={25} color='#006eff'/>
                </div>
            </div>
        </div>
        <div className={clsx(
            "grid grid-cols-3"
        )}>
            {this.state.notes.map(note => (
                <Notebox key={note.id} {...note}/>
            ))}
        </div>
      </main>
    )
  }
}

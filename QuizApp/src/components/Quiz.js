import clsx from 'clsx';
import React, { Component } from 'react'

export default class Quiz extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            question: [
                {
                    questionTitle: 'What is the capital of Iran?',
                    answerOption: [
                        { answerText: 'Dubi', isCorrect: false},
                        { answerText: 'Tehran', isCorrect: true},
                        { answerText: 'Istanbol', isCorrect: false},
                        { answerText: 'Cabul', isCorrect: false},
                    ]
                },
            ]
        }


    }
    
    
  render() {
    return (
      <main className={clsx(
        "flex justify-center items-center flex-col",
        "min-h-screen"
      )}>
        <h1 className={clsx(

        )}>
            {this.state.question[0].questionTitle}
        </h1>
        <ul className={clsx(
            "flex justify-center items-center flex-col",
            "mt-14",
            "w-96"
        )}>
            <li className={clsx(
                "px-10 py-2",
                "border-2",
                "w-full",
                "m-1.5",
                "text-center text-2xl",
                "text-blue-300 bg-blue-900",
                "rounded-full",
                "font-bold"
            )}>{this.state.question[0].answerOption[0].answerText}</li>
            <li className={clsx(
                "px-10 py-2",
                "border-2",
                "w-full",
                "m-1.5",
                "text-center text-2xl",
                "text-blue-300 bg-blue-900",
                "rounded-full",
                "font-bold"
            )}>{this.state.question[0].answerOption[1].answerText}</li>
            <li className={clsx(
                "px-10 py-2",
                "border-2",
                "w-full",
                "m-1.5",
                "text-center text-2xl",
                "text-blue-300 bg-blue-900",
                "rounded-full",
                "font-bold"
            )}>{this.state.question[0].answerOption[2].answerText}</li>
            <li className={clsx(
                "px-10 py-2",
                "border-2",
                "w-full",
                "m-1.5",
                "text-center text-2xl",
                "text-blue-300 bg-blue-900",
                "rounded-full",
                "font-bold"
            )}>{this.state.question[0].answerOption[3].answerText}</li>
        </ul>
      </main>
    )
  }
}

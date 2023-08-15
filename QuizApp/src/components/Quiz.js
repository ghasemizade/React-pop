import clsx from 'clsx';
import React, { Component } from 'react'
import Question from './Question';

export default class Quiz extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            question: [
                {
                    questionTitle: 'What is the capital of Iran?',
                    answerOption: [
                        {id: 1, answerText: 'Dubi', isCorrect: false},
                        {id: 2, answerText: 'Tehran', isCorrect: true},
                        {id: 3, answerText: 'Istanbol', isCorrect: false},
                        {id: 4, answerText: 'Cabul', isCorrect: false},
                    ]
                },
            ]
        }


    }
    
    
  render() {
    return (
      <main className={clsx(
        "flex justify-center items-center flex-col",
        "min-h-screen",
        "bg-blue-400"
      )}>
        <h1 className={clsx(
            "text-3xl text-gray-600 font-bold"
        )}>
            {this.state.question[0].questionTitle}
        </h1>
        <ul className={clsx(
            "flex justify-center items-center flex-col",
            "mt-14",
            "w-96"
        )}>
            {this.state.question[0].answerOption.map((index) => 
                <Question key={index.id} option={index.answerText}/>
            )}
        </ul>
      </main>
    )
  }
}

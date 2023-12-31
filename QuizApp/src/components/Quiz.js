import clsx from 'clsx';
import React, { Component } from 'react'
import Question from './Question';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            qOption: '',
            currentQuestion: 0,
            score: 0,
            showScore: false,
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
                {
                    questionTitle: 'What is the capital of France?',
                    answerOption: [
                        {id: 1, answerText: 'Paris', isCorrect: true},
                        {id: 2, answerText: 'London', isCorrect: false},
                        {id: 3, answerText: 'Berlin', isCorrect: false},
                        {id: 4, answerText: 'Madrid', isCorrect: false},
                    ]
                },
                {
                    questionTitle: 'What is Water composition?',
                    answerOption: [
                        {id: 1, answerText: 'CaAl', isCorrect: false},
                        {id: 2, answerText: 'NACL', isCorrect: false},
                        {id: 3, answerText: 'H2O', isCorrect: true},
                        {id: 4, answerText: 'Br2Cu', isCorrect: false},
                    ]
                },
                {
                    questionTitle: 'What is the capital of Iraq?',
                    answerOption: [
                        {id: 1, answerText: 'Babol', isCorrect: false},
                        {id: 2, answerText: 'Baghdad', isCorrect: true},
                        {id: 3, answerText: 'Istanbol', isCorrect: false},
                        {id: 4, answerText: 'Cabul', isCorrect: false},
                    ]
                },
            ]
        }
        // this.onClickHandler =  this.onClickHandler.bind(this)
    }
    
    onClickHandler(isCorrect){
        if (isCorrect) {
            this.setState(prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }

        if (this.state.currentQuestion === 3) {
            this.setState({
                showScore: true
            })
        } else {
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }
    }

    scoreHandler() {
        
    }
    
    render() {
    return (
      <main className={clsx(
        "flex justify-center items-center flex-col",
        "min-h-screen",
        "bg-blue-400"
      )}>
        {this.state.showScore ? (<div>You scored {this.state.score} out of 4</div>) : (
            <>
                <h1 className={clsx(
                    "text-3xl text-gray-600 font-bold"
                )}>
                    {this.state.question[this.state.currentQuestion].questionTitle}
                </h1>
                <ul className={clsx(
                    "flex justify-center items-center flex-col",
                    "mt-14",
                    "w-96"
                )}>
                    {this.state.question[this.state.currentQuestion].answerOption.map((index) => 
                        <Question
                            key={index.id} 
                            option={index.answerText}
                            click={this.onClickHandler.bind(this, index.isCorrect)}
                        />
                    )}
                </ul>
            </>
        )}
      </main>
    )
  }
}

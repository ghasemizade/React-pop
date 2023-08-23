import clsx from 'clsx'
import React, { Component } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import Todo from './Todo';

export default class Input extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          todos: [],
          todoTitle: '',
          status: 'All'
      }

      this.changeHandler = this.changeHandler.bind(this)
      this.clickHandler = this.clickHandler.bind(this)
      this.removetodo = this.removetodo.bind(this)
      this.completed = this.completed.bind(this)
      this.typeEdit= this.typeEdit.bind(this)
    }
    
    changeHandler(event){
      this.setState({
        todoTitle: event.target.value
      })
    }

    clickHandler(){
        let newTodo = {
          id: this.state.todos.length + 1,
          title: this.state.todoTitle,
          completed: false
        }

        this.setState(preveState =>{
          return {
            todos: [...preveState.todos, newTodo],
            todoTitle: ''
          }
        })
    }

    removetodo (todoId){

      let newtodos = this.state.todos.filter(todo => {
        return todo.id !== todoId
      })
      
      this.setState({
        todos: newtodos
      })
    }

    completed (todoId){
      let newTodos = [...this.state.todos]


      newTodos.forEach(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
      })
      this.setState({
        todos: newTodos
      })
    }

    typeEdit (event){
      console.log(event.target.value);
      this.setState({
        status: event.target.value
      })
    }

  render() {
    return (
      <div>
        <div className={clsx(
          "flex justify-center items-center"
        )}>
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
            )} type='text' placeholder='Todo...' 
                value={this.state.todoTitle}
                onChange={this.changeHandler} />
            <AiFillPlusCircle 
                size={20} 
                color='#6366f1' 
                cursor={'pointer'} 
                onClick={this.clickHandler}/>
          </div>
          <select className={clsx(
            "outline-none",
            "py-1 px-2",
            "rounded-lg"
          )} onChange={this.typeEdit}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </div>
        <div className={clsx(
          "flex justify-center items-center flex-col",
          "mt-20"
          )}>

            {
              this.state.status === "Completed" && this.state.todos.filter(todo => todo.completed).map
              (todo => (
                <Todo key={todo.id} {...todo} onRemove={this.removetodo} onCompleted={this.completed}/>
              ))
            }

            {
              this.state.status === "Uncompleted" && this.state.todos.filter(todo => !todo.completed).map
              (todo => (
                <Todo key={todo.id} {...todo} onRemove={this.removetodo} onCompleted={this.completed}/>
              ))
            }
            
            {
              this.state.status === "All" && this.state.todos.map(todo => (
                <Todo key={todo.id} {...todo} onRemove={this.removetodo} onCompleted={this.completed}/>
              ))
            }


        </div>
      </div>
    )
  }
}

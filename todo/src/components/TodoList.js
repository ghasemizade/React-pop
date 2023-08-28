import clsx from 'clsx'
import React, { useState } from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import Todo from './Todo';

export default function TodoList () {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [status, setStatus] = useState('All')
    
    
    const changeHandler = (event) =>{
      setTodoTitle(event.target.value)
    }

    const clickHandler = () =>{
        let newTodo = {
          id: todos.length + 1,
          title: todoTitle,
          completed: false
        }


        setTodos(preveState => {
          return [...preveState, newTodo]
        })

        setTodoTitle('')
    }

    const removetodo = (todoId) =>{

      let newtodos = todos.filter(todo => {
        return todo.id !== todoId
      })
      
      setTodos(newtodos)
    }

    const completed = (todoId) =>{
      let newTodos = [...todos]

      newTodos.forEach(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }
      })
      
      setTodos(newTodos)
    }

    const typeEdit = (event) =>{
      setStatus(event.target.value)
    }

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
                "px-5 py-2",
                "w-full",
                "bg-white",
                "rounded-lg",
            )} type='text' placeholder='Todo...' 
                value={todoTitle}
                onChange={changeHandler} />
            <AiFillPlusCircle 
                size={20} 
                color='#6366f1' 
                cursor={'pointer'} 
                onClick={() => clickHandler()}/>
          </div>
          <select className={clsx(
            "outline-none",
            "py-2 px-2",
            "rounded-lg"
          )} onChange={typeEdit}>
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
              status === "Completed" && todos.filter(todo => todo.completed).map
              (todo => (
                <Todo key={todo.id} {...todo} onRemove={removetodo} onCompleted={completed}/>
              ))
            }

            {
              status === "Uncompleted" && todos.filter(todo => !todo.completed).map
              (todo => (
                <Todo key={todo.id} {...todo} onRemove={removetodo} onCompleted={completed}/>
              ))
            }
            
            {
              status === "All" && todos.map(todo => (
                <Todo key={todo.id} {...todo} onRemove={removetodo} onCompleted={completed}/>
              ))
            }


        </div>
      </div>
    )
}

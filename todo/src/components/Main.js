import React from 'react'
import TodoList from './TodoList'
import clsx from 'clsx'


export default function Main () {
    return (
      <main className={clsx(
        "flex justify-center items-center",
        "mt-40",
      )}>
        <div className={clsx(
            "flex justify-center items-center"
        )}>
            <TodoList />
        </div>
      </main>
    )
}

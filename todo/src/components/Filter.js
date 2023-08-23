import clsx from 'clsx'
import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <select className={clsx(
        "outline-none",
        "py-1 px-2",
        "rounded-lg"
      )}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Todo">Todo</option>
      </select>
    )
  }
}

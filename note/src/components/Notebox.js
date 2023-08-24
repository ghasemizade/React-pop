import React, { Component } from 'react'
import clsx from 'clsx'

export default class Notebox extends Component {
  render() {
    let {noteTitle, color} = this.props
    return (
      <div className={clsx(
        "mt-20",
        "bg-white",
        "px-10 py-2 m-5",
        "rounded-lg"
      )}>{noteTitle}
        <h1 className={clsx(
            "text-3xl",
        )} style={{color: {color}}}>test</h1>
      </div>
    )
  }
}

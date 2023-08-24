import React, { Component } from 'react'
import clsx from 'clsx'

export default class Notebox extends Component {

  clickHandler(id){
    this.props.onRemove(id)
  }

  render() {
    return (
      <div className={clsx(
        "mt-20",
        "bg-white",
        "px-10 py-2 m-5",
        "rounded-lg"
      )} onClick={this.clickHandler.bind(this, this.props.id)}>
        <h1 className={clsx(
            "text-3xl",
        )} style={{color: this.props.color}}>{this.props.title}</h1>
      </div>
    )
  }
}

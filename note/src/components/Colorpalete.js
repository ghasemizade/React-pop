import React, { Component } from 'react'
import clsx from 'clsx'

export default class Palete extends Component {

  colorClick (color){
    this.props.onColor(color)
  }

  render() {
    let {color} = this.props
    return (
        <div className={clsx(
            "border-2",
            "rounded-full",
            "w-7 h-7"
        )} style={{backgroundColor: `${color}`}} onClick={this.colorClick.bind(this, this.props.color)}></div>

    )
  }
}

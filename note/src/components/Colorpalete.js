import React, { Component } from 'react'
import clsx from 'clsx'

export default class Palete extends Component {
  render() {
    let {color} = this.props
    return (
        <div className={clsx(
            "border-2",
            "rounded-full",
            "w-7 h-7"
        )} style={{backgroundColor: `${color}`}}></div>

    )
  }
}

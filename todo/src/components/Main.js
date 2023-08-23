import React, { Component } from 'react'
import Input from './Input'
import clsx from 'clsx'


export default class Main extends Component {
  render() {
    return (
      <main className={clsx(
        "flex justify-center items-center",
        "mt-40",
      )}>
        <div className={clsx(
            "flex justify-center items-center"
        )}>
            <Input />
        </div>
      </main>
    )
  }
}

import React, { Component } from 'react'
import clsx from 'clsx'

export default class Header extends Component {
  render() {
    return (
        <header className={clsx(
            "flex justify-center items-center",
            "text-4xl",
            "mt-20",
            "font-bold",

        )}>
            <h1 className={clsx(
                "tracking-widest",
                "text-[#006eff]"
            )}>NOTE APP</h1>
        </header>
    )
  }
}

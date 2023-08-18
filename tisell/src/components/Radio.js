import clsx from 'clsx'
import React from 'react'

export default function Radio() {
    return (
        <>
            <section className={clsx(
                "flex justify-start items-center",
                "w-full",
                "px-5"
            )}>
                <span className={clsx(
                    "mr-5",
                    "flex justify-center items-center"
                )}>
                    <input type="radio" name="set" id="Round Trip"/>
                    <label className={clsx(
                        "ml-2"
                    )} htmlFor="Round Trip">Round Trip</label>
                </span>
                <span className={clsx(
                    "flex justify-center items-center"
                )}>
                    <input type="radio" name="set" id="One Way" />
                    <label className={clsx(
                        "ml-2"
                    )} htmlFor="One Way">One Way</label>
                </span>
            </section>
        </>
    )
}
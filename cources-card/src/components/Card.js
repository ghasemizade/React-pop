import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({img, title, desc, routeId}) {
  return (
    <Link to={`/cources/${routeId}`} className='flex justify-center items-center flex-col my-10 cursor-pointer border-2 w-60 h-80 hover:border-blue-600 duration-150'>
            <img width={100} src={img} alt="" />
            <h2 className='uppercase text-3xl font-bold text-gray-400'>{title}</h2>
            <p>{desc}</p>
    </Link>
  )
}

import React from 'react'
import './Card.css'

export default function Img({src, width, height, alt}) {
  return (
    <img className='img'
      src={src} 
      alt={alt} 
      width={width} 
      height={height} />
  )
}


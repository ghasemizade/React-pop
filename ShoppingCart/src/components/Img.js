import React from 'react'

export default function Img({src, width, height, alt}) {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  )
}


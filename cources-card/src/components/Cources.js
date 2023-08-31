import React from 'react'
import Card from './Card';
import data from './Coursesdata'
import { useState } from 'react';

export default function Cources() {

  const [cources] = useState(data)


  return (
    <div className='grid grid-cols-3'>
        {cources.map(card => (
            <div className='flex justify-center items-center'>
                <Card 
                    key={card.id}
                    img={card.imgsrc}
                    title={card.name}
                    desc={card.desc}
                    routeId={card.id}
                />
            </div>
        ))}
    </div>
  )
}

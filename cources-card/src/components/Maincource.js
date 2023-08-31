import React from 'react'
import data from './Coursesdata'
import { useParams } from 'react-router-dom'


export default function Maincource() {

    let params = useParams()
    let mainCourceData = data.find(cource => cource.id == params.courceId)
    
    console.log(mainCourceData);
  
    return (
    <div>
        <img src={mainCourceData.imgsrc} alt="" />
    </div>
  )
}

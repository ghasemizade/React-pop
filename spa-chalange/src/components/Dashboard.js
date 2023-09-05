import React from 'react'
import { isUserLogin } from './../utils'
import { Navigate } from 'react-router-dom'

export default function Dashboard() {
  
    // let isUserLogin = isLogin('hosein')
  
    return (
    <div>
        {isUserLogin ? (
            <p>you're login</p>
        ) : (
            <Navigate to={'/login'}/>
        )}
    </div>
  )
}

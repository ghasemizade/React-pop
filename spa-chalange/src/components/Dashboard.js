import React from 'react'
import { isUserLogin } from './../utils'
import Login from './Login'

export default function Dashboard() {
  
    // let isUserLogin = isLogin('hosein')
  
    return (
    <div>
        {isUserLogin ? (
            <p>you're login</p>
        ) : (
            <Login/>
        )}
    </div>
  )
}

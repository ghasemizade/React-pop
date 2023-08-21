import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className='nav-bar'>
            <ul>
                <li className='home'>Home</li>
                <li className='store'>Store</li>
                <li className='about'>About</li>
            </ul>
        </nav>
      </header>
    )
  }
}

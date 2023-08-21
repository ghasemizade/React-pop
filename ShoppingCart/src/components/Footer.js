import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='contact'>
            <a className='telegram' href='https://t.me/Hosein_ghasemizade'>
                TELEGRAM
            </a>
            <a href="https://ghasemizade.com">
                PERSONAL WEBSITE
            </a>
            <a className='github' href='https://github.com/ghasemizade'>
                GITHUB
            </a>
        </div>
      </footer>
    )
  }
}

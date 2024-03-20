import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
        <div className='subconatiner'>
            <div className='name'>
                <h2>CodeOlima</h2>
            </div>
            <div className='panel'>
                <Link className='link'><p>Login</p></Link>
                <Link className='link'><p>Register</p></Link>
            </div>
        </div>
        <div className='footer'>
            <div className='marq'>
                <marquee>This is Home Page</marquee>
            </div>
        </div>
    </div>
  )
}

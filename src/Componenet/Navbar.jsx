import React from 'react'
import logoimage from '../assets/image_1.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
  return (
    <>
    
    <nav className='nav-bar'>
        <div className='nav-bar-left'>
            <img src={logoimage} alt="logo" />
            <h1>SafeCam</h1>
        </div>
        <div className='nav-bar-right'>
            <ul>
                <li>
                    <Link to='/home' className='nav-bar-right-link'>Home</Link>
                </li>
                <li>
                    <Link to='/about'className='nav-bar-right-link'>About</Link>
                </li>
                <li>
                    <Link to='/service'className='nav-bar-right-link'>Service</Link>
                </li>
                <li>
                    <Link to='/contact'className='nav-bar-right-link'>Contact</Link>
                </li>
            </ul>
        </div>
        <button className='nav-bar-button'>Log Out</button>
    </nav>
    
    </>
  )
}

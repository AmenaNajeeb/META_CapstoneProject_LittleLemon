import React, { useState } from 'react'
import Logo from '../images/Logo.svg'

function Nav() {
    const [menuOpen, setMOpen] = useState(false);
    const toggleMenu = () =>{
        setMOpen(!menuOpen)
    }
  return (
    <>
    <nav className={`navbar ${menuOpen ? "open":""}`}>
        <a href='/' >
        <img className='logo' src={Logo} alt="little-lemon-logo" />
        </a>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Services</a>
            </li>
            <li>
                <a href='/'>Menu</a>
            </li>
            <li>
                <a href='/'>Reservation</a>
            </li>
            <li>
                <a href='/'>Order Online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav
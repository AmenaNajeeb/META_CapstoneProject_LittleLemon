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
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/services'>Services</a>
            </li>
            <li>
                <a href='/menu'>Menu</a>
            </li>
            <li>
                <a href='/reserve'>Reservation</a>
            </li>
            <li>
                <a href='/order'>Order Online</a>
            </li>
            <li>
                <a href='/login'>Login</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav
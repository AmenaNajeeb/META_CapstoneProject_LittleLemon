import React from 'react'
import logo from '../images/Logo.svg'

function Footer() {
  return (
    <>
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt='small-little-lemon' />
                <p>We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/services'>Services</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reserve'>Reservation</a></li>
                    <li><a href='/order'>Order Online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <br />123, Chicago, USA</li>
                    <li>Phone: <br />+192 111 111 111</li>
                    <li>Email: <br />about@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <ul>
                <li><a href='https://facebook.com'>Facebook</a></li>
                <li><a href='https://instagram.com'>Instagram</a></li>
                <li><a href='https://twitter.com'>Twitter</a></li>
                </ul>
            </div>
        </section>
    </footer>
    </>
  )
}

export default Footer
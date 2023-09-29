import React from 'react'
import './Navbar.css'
import logo from '../Images/logo-120.png';

function Navbar() {
    return (
        <div className={`cNavbar`}>
            <div className='logo'>
                <img src={logo} alt="Logo" className={`img-fluid`} />
                <h3>CoinWatch</h3>
            </div>
            <div className="items">
                <p>Home</p>
                <p>Search</p>
                <p>More</p>
            </div>
        </div>
    )
}

export default Navbar
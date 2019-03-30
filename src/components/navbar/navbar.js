import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default (props) => {
    return (
        <>
            <div className='navbar'>
                <p className="logo">lowkey</p>
                <div className='navLinks'>
                    <Link to='/home' className="link" >Home</Link>
                    <Link to='/profile' className="link" >Profile</Link>
                    <Link to='/friends' className="link" >Friends</Link>
                    <Link to='/explore' className="link" >Explore</Link>
                </div>
            </div>
        </>
    )
}

// const loggedIn and const loggedOut
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className='navbar'>
                    <p className="logo">lowkey</p>
                    <div className='navLinks'>
                        <Link to='/' className="link" >Home</Link>
                        <Link to='/profile' className="link" >Profile</Link>
                        <Link to='/friends' className="link" >Friends</Link>
                        <Link to='/explore' className="link" >Explore</Link>
                    </div>
                </div>
            </>
        )
    }
}

// const loggedIn and const loggedOut
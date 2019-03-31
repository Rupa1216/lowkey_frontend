import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import './navbar.css'

export default (props) => {

    const loggedOut =
    <>
        <li className="navItem">
            <Link className="link" to="/signup">Sign Up</Link>
        </li>
        <li className="navItem">
            <Link className="link" to="/login">Login</Link>
        </li>
    </>

    const loggedIn =
    <>
        <li className="navItem">
            <Link to='/profile' className="link" >Profile</Link>
        </li>
        <li className="navItem">
            <Link to='/notifications' className="link" >Notifications</Link>
        </li>
        <li className="navItem">
            <Link to='/friends' className="link" >Friends</Link>
        </li>
        <li className="navItem">
            <Link to='/explore' className="link" >Explore</Link>
        </li>
        <li className="navItem">
            <Link className="link" to="/logout">Logout</Link>
        </li>
    </>

    return (
        <>
            <div className='navbar'>
                <nav>
                    <Link to='/home' className="logo">lowkey</Link>
                    <div className='navLinks'>
                        <li className="navItem">
                            <Link to='/home' className="link" >Home</Link>
                        </li>
                        
                    </div>
                </nav>
            </div>
        </>
    )
}

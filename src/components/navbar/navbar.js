import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import './navbar.css'

export default (props) => {

    const loggedOut =
        <>
            <li className="navItem">
                <Link className="link" to="/login">Login</Link>
            </li>
            <li className="navItem">
                <Link className="link" to="/signup">Sign Up</Link>
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
            <header className='lk-header'>
                <nav className="nav">
                    <div className='allNavItems'>
                        <div>
                            <Link to='/' className="logo">lowkey</Link>
                        </div>
                        <div className='navLinks'>
                            <ul className='ul'>
                                <li className="navItem">
                                    <Link to='/' className="link" >Home</Link>
                                </li>
                                <AuthContext.Consumer>
                                    {
                                        user => {
                                            if (user) return loggedIn
                                            else return loggedOut
                                        }
                                    }
                                </AuthContext.Consumer>
                            </ul>
                        </div>
                        <div className="search justify-content-end">
                        <form class="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="@Username" aria-label="Search" />
                            <button className="btn btn-sm btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

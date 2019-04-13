import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth';
import Search from '../search/search';


import './navbar.css'

export default (props) => {

    const loggedOut =
        <>
            <li className="navItem">
                <Link className="link" to="/login" style={{textDecoration: 'none'}}>Login</Link>
            </li>
            <li className="navItem">
                <Link className="link" to="/signup" style={{textDecoration: 'none'}}>Sign Up</Link>
            </li>
        </>

    const loggedIn =
        <>
            <li className="navItem">
                <Link to='/profile' className="link" style={{textDecoration: 'none'}}>Profile</Link>
            </li>
            {/* <li className="navItem">
                <Link to='/notifications' className="link" style={{textDecoration: 'none'}}>Notifications</Link>
            </li> */}
            <li className="navItem">
                <Link to='/friends' className="link" style={{textDecoration: 'none'}}>Friends</Link>
            </li>
            {/* <li className="navItem">
                <Link to='/explore' className="link" style={{textDecoration: 'none'}}>Explore</Link>
            </li> */}
            <li className="navItem">
                <Link className="link" to="/logout" style={{textDecoration: 'none'}}>Logout</Link>
            </li>
        </>

    return (
        <>
            <header className='lk-header'>
                <nav className="nav">
                    <div className='allNavItems'>
                        <div>
                            <Link to='/' className="logo" style={{textDecoration: 'none'}}>lowkey</Link>
                        </div>
                        <div className='navLinks ml-2'>
                            <ul className='ul'>
                                <li className="navItem">
                                    <Link to='/' className="link" style={{textDecoration: 'none'}}>Home</Link>
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
                        <div className="search ml-4">
                        {/* <form className="form-inline pb-3">
                            <input className="form-control mr-sm-2" type="search" placeholder="@Username" aria-label="Search" />
                            <button className="btn btn-sm btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                        <Search />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

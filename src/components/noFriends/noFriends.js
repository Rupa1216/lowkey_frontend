import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    return (
        <>
        <h1 className='alert alert-secondary'>You're not following anyone yet!</h1>
        <h3>Check out our <Link to='/explore'>Explore</Link> page!</h3>
        </>
    )
}
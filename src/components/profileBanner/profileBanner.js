import React from 'react';
import { Link } from 'react-router-dom';
import './profileBanner.css'

export default (props) => {
    return (
        <div className='profile-info'> 
            <div className='profile-info-left'>
                <img className='profile-avatar rounded-circle' src='https://www.avatarist.com/images/tutorials/basic/original-image.jpg' alt=''/>
                <h3 className='profile-username'>PamAbr</h3>
            </div>
            <div className='profile-info-right'>
                <Link to='/friends' className='view-friends' style={{textDecoration: 'none'}}>View Friends</Link>
                <button type="button" className="btn btn-info">Follow</button>            
                </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import './createPostButton.css'

export default (props) => {
    return (
        <div className='create-post-button'>
            <Link className="button-link" to="/create" >
            <i className="fas fa-pencil-alt fa-lg icon rounded-circle" />
        </Link>
        </div>
    )
}
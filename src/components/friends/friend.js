import React from 'react';
import './friend.css';

export default (props) => {
    return (
        <>
        <div className='box'>
        <div className="friend d-flex">
            <div className='friend-left avatar'>
                <img src={props.data.avatar_url} className='avatar img-thumbnail rounded-circle border-info' alt=''></img>
            </div>
            <div className='friend-right'>
                <div className='username'>
                    {props.data.username}
                </div>
                <div className='bio'>
                    {props.data.bio}
                </div>
            </div>
        </div>
        </div>
        <br/>
        </>
    )
}

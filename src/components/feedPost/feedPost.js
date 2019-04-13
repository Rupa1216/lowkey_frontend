import React from 'react';
import Moment from 'moment';
import Likes from '../likes/likes';

export default (props) => {
    return (
        <div className="post">
            <div className='post-header'>
                <div className='post-header-left'>
                    <img src={props.data.avatar} alt='' className='rounded-circle border-info'></img>
                </div>
                <div className='post-header-right'>
                    <p>{props.data.username}</p>
                </div>
            </div>
            <div className='post-body'>
                {props.data.content}
                <p>{Moment(`${props.data.created_at}`, "YYYYMMDD").fromNow()}</p>
            </div>
            <div className="post-footer">
                <Likes />
            </div>
        </div>
    )
}


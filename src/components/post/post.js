import React from 'react';
import Moment from 'moment';
import Likes from '../like/like';

export default (props) => {
        return (
            <div className="post">
                <div className='post-header'>
                    <div className='post-header-left'>
                        <img src={props.data.avatar} alt=''></img>
                    </div>
                    <div className='post-header-right'>
                        <p>{props.data.username}</p>
                        <p>{Moment(`${props.data.created_at}`, "YYYYMMDD").fromNow()}</p>
                    </div>
                </div>
                <div className='post-body'>
                    {props.data.content}
                </div>
                <div className="post-footer">
                    <Likes />
                </div>
            </div>
        )
    }


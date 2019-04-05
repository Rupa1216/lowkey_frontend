import React from 'react';
import Moment from 'moment';

export default class Post extends React.Component {

    state = {
        avatar: '',
        username: '',
        created_at: '',
        content: '',
    }

    render() {
        return (
            <div className="post">
                <div className='post-header'>
                    <div className='post-header-left'>
                        <img src={this.state.avatar} alt=''></img>
                    </div>
                    <div className='post-header-right'>
                        <p>{this.props.username}</p>
                        <p>{moment(`${this.state.created_at}`, "YYYYMMDD").fromNow()}</p>
                    </div>
                </div>
                <div className='post-body'>
                    {this.state.content}
                </div>
                <div className="post-footer">
                    <Likes />
                </div>
            </div>
        )
    }
}

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoFriends from '../components/noFriends/noFriends';
import Friend from '../components/friends/friend';
import './friendsList.css'

export default class FriendsList extends React.Component {
    
    state = {
        friends: [
            {
                "username": "Heri123",
                "avatar_url": 'https://avatarfiles.alphacoders.com/643/64385.png',
                "bio": "I love me some Popeyes"
            },
            {
                "username": "Rupa123",
                "avatar_url": 'https://avatarfiles.alphacoders.com/893/89303.gif',
                "bio": "lol"
            },
            {
                "username": "Heri123",
                "avatar_url": 'https://avatarfiles.alphacoders.com/893/89303.gif',
                "bio": "I love me some Popeyes"
            },
            {
                "username": "Rupa123",
                "avatar_url": 'https://avatarfiles.alphacoders.com/893/89303.gif',
                "bio": "lol"
            }
        ]
    }

    render() {
        const { friends } = this.state;
        const friendsList = <ul className='friendsList'>
        {friends.map((e, i) => { 
            return (
                <Friend data={e} key={i}/>
            )
        })}
    </ul>
        return (
            <div className='friends'>
                <div>
                {friends.length < 1 ? <NoFriends /> : friendsList}
                </div>
            </div>
        )
    }
}
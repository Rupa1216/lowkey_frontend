import React from 'react';
import AuthContext from '../contexts/auth';
import NoPosts from '../components/noPosts/noPosts';
import Post from '../components/post/post';

export default class Feed extends React.Component {

    static contextType = AuthContext;

    state = {
        loading: false,
        posts: [
            {
                "created_at": "2019-04-06T18:17:03.953Z",
                "content": "hello world",
                "username": "Michelle123"
            },
            {
                "created_at": "2019-04-07T01:53:09.264Z",
                "content": "blah",
                "username": "Michelle123"
            },
            {
                "created_at": "2019-04-07T01:53:22.016Z",
                "content": "blah blah blah",
                "username": "Michelle123"
            }
        ],
        avatar: '',
        username: '',
        created_at: '',
        content: '',
    }

    render() {

        const { posts } = this.state;
        const empty = <NoPosts />
        const newsfeed = <ul className='list'>
            {posts.map((e, i) => { 
                return (
                    <Post data={e} key={i}/>
                )
            })}
        </ul>

        return (
            <div className='feed'>
                {posts.length < 1 ? empty : newsfeed}
            </div>
        )
    }
}


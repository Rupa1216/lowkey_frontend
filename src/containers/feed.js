import React from 'react';
import AuthContext from '../contexts/auth';
import NoPosts from '../components/noPosts/noPosts';
import Post from '../components/post/post';

export default class Feed extends React.Component {

    static contextType = AuthContext;

    state = {
        loading: false,
        posts: [],
        avatar: '',
        username: '',
        created_at: '',
        content: '',
    }

    render() {

        const { posts } = this.state;
        const empty = <NoPosts />
        const newsfeed = <ul>
            {posts.map((e, i) => { // key = {post.id}
                return <li key={i}>
                    <Post data={e} />
                </li>
            })}
        </ul>


        return (
            <div className='feed'>
                {posts.length < 1 ? empty : newsfeed}
            </div>
        )
    }
}


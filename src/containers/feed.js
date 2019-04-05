import React from 'react';
import NoPosts from '../components/noPosts/noPosts';
import Post from '../post/post';

export default class Feed extends React.Component {

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
                    <Post post={e} data={this.state} />
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


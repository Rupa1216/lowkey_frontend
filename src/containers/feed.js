import React from 'react';
import NoPosts from '../components/noPosts/noPosts';

export default class Feed extends React.Component {

    state = {
        posts: [],
    }

    render() {

        const { posts } = this.state;
        const empty = <NoPosts />
        const newsfeed = <ul>
            {posts.map((e, i) => {
                return <li key={i}>
                    {e}
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


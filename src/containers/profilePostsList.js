import React from 'react';
import axios from 'axios';
import Moment from 'moment';
// import ProfilePost from '../components/profilePost/profilePost'
import Likes from '../components/likes/likes'

export default class extends React.Component {

    state = {
        profilePosts: [],
        loading: false,
    }

    componentDidMount() {
        axios.get(`http://localhost:3003/posts/Michelle123/all`)
            // '/posts', {
            //     params: {
            //       ID: 12345
            //     }
            //   }
            .then((res) => {
                res.data.map((e, i) => {
                    this.setState({
                        profilePosts: [...this.state.profilePosts,
                        { content: e.content, created_at: e.created_at }]
                    })
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { profilePosts } = this.state;
        console.log('profile posts', profilePosts)
        return (
            <>
                {profilePosts.map(e => {
                    return (<>
                        <div className="profile-post">
                            <div className='profile-post-body'>
                                {e.content}
                                <div className='profile-post-timestamp'>
                                <p>{Moment(`${e.created_at}`, "YYYYMMDD").fromNow()}</p>
                                </div>
                            </div>
                            <div className="profile-post-footer">
                                <Likes />
                            </div>
                        </div>
                        <hr />
                    </>
                    )
                })}
            </>
        )
    }
}
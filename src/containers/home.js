import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import Feed from './feed';
import CreatePostButton from '../components/createPostButton/createPostButton';

export default class Home extends React.Component {

    static contextType = AuthContext;

    state = {
        
    }

    render() {
        console.log(this.context)
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                                    <h2>Welcome back, {this.context.email}!</h2>
                                    <p>What's on your mind?</p>
                                    <Feed />
                                    <CreatePostButton />
                                </>
                            )
                        } else {
                            return <Redirect to='/signup' />
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}


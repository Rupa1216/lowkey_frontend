import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import FeedList from './feedList';
import CreatePostButton from '../components/createPostButton/createPostButton';
import './home.css'

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
                                    <FeedList />
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


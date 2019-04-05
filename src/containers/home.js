import React from 'react';
import firebase from 'firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import Feed from './feed';

export default class Home extends React.Component {

    state = {
        
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                                    <h2>Welcome back, {user.email}</h2>
                                    <Feed />
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

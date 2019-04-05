import React from 'react';
import firebase from 'firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

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
                                    <h4>Your ID is: {user.uid}</h4>
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

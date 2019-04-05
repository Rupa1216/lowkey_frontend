import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

export default class Home extends React.Component {

    static contextType = AuthContext;

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
                                    <h2>Welcome back, {this.context.username}!</h2>
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

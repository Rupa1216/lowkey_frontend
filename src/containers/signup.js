import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';

export default class Signup extends React.Component {

    state = {

    }

    render() {
        return (
        <AuthContext.Consumer>
            {
                (user) => {
                    if (user) {
                        return <Redirect to='/' />
                    } else {
                        
                    }
                }
            }
        </AuthContext.Consumer>
        )
    }
}
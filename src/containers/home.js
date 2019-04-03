import React from 'react';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

export default class Home extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
            else {
                this.setState({ user: null })
            }
        })
    }

    render() {
        const { userEmail, userId } = this.state; // LATEST LINE CHANGE

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

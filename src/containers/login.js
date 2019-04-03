import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    state = {
        email: '',
        password: '',
        error: ''
    }

    render() {

        const displayForm = <>
            <h1>Login</h1>
            
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </>;

        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return <Redirect to='/' />
                        } else {
                            return displayForm;
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}
import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';

export default class Signup extends React.Component {

    state = {
        username: '',
        email: '',
        password: '',
        error: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { email, password, error } = this.state;
        const displayForm = <>
            <h1>Login</h1> 
            
            <form>
            <div className="formItem">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="input" aria-describedby="emailHelp" placeholder="Enter username" />
                </div>
                <div className="formItem">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="input" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="formItem">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                </div>
                <button type="submit" className="submitButton" >Login</button>
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
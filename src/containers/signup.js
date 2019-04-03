import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

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

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('Returns: ', response);
            })
            .catch(err => {
                const { message } = err;
                this.setState({ error: message });
            })
    }

    render() {
        const { username, email, password, error } = this.state;
        const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
        const displayForm = <>
            <h1>Sign Up</h1>
            {displayError}
            <form>
                <div className="formItem">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="input" aria-describedby="emailHelp" placeholder="Enter username" name="username" onChange={this.handleChange} />
                </div>
                <div className="formItem">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="input" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleChange} />
                </div>
                <div className="formItem">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="input" placeholder="Password" name="password" onChange={this.handleChange} />
                </div>
                <button type="submit" className="submitButton" onClick={this.handleSubmit} >Sign Up</button>
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
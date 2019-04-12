import React from 'react';
import firebase from '../firebase';
import axios from 'axios';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

export default class Signup extends React.Component {

    static contextType = AuthContext;

    state = {   
        username: '',
        email: '',
        password: '',
        error: '',
        fbase_uid: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                const fbase_uid = res.user.uid
                // console.log('Returns: ', res.user.uid);
                this.setState({ fbase_uid }, () => 
                axios.post('http://localhost:3003/users/', {
                    fbase_uid, 
                    username: username, 
                    email: email  
                })
                )
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
            <br/>
            {displayError}
            <form>
                <div className="form-group formItem">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control input" placeholder="Enter username" name="username" onChange={this.handleChange} value={username} />
                </div>
                <div className="form-group formItem">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control input" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.handleChange} value={email} />
                </div>
                <div className="form-group formItem">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control input" placeholder="Password" name="password" onChange={this.handleChange} value={password} />
                </div>
                <button type="submit" className="btn btn-info submitButton" onClick={this.handleSubmit} >Sign Up</button>
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
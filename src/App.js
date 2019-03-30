import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import firebase from './firebase';
import './App.css';

// ---- Pages
import Navbar from './components/navbar/navbar';

// ---- Contexts
import AuthContext from './contexts/auth';

class App extends Component {

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
    return (
      <HashRouter>
        <Route path='/' component={ Navbar } />
      </HashRouter>
    );
  }
}

export default App;

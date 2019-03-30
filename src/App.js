import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import firebase from './firebase';
import './App.css';

// ---- Pages
import Navbar from './components/navbar/navbar';

// ---- Contexts
import AuthContext from './contexts/auth';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path='/' component={ Navbar } />
      </HashRouter>
    );
  }
}

export default App;

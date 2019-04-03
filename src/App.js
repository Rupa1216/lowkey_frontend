import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';
import './App.css';

// ---- Pages
import Navbar from './components/navbar/navbar';
import Signup from './containers/signup';
import Home from './containers/home';
import Login from './containers/login';
import Logout from './containers/logout';


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

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Navbar} />
          <div className='container'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signup' exact component={Signup} />
              <Route path='/login' exact component={Login} />
              <Route path='/logout' exact component={Logout} />
            </Switch>
          </div>
        </AuthContext.Provider>
      </HashRouter >
    );
  }
}

export default App;

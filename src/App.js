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
import CreatePost from './components/createPost/createPost';
import NotFound from './components/notFound/notFound';
import Loading from './components/loading/loading';
import FriendsList from './containers/friendsList';


// ---- Contexts
import AuthContext from './contexts/auth';

class App extends Component {

  state = {
    user: null,
    username: '',
    email: '',
    user_id: '',
    fbase_uid: '',
    token: ''
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user }, () => {
          this.getFirebaseIdToken()
        });
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  getFirebaseIdToken = () => {
    firebase.auth().currentUser.getIdToken(false).then((token) => {
      this.setState({ token })
    }).catch((error) => {
      console.log("Error getting FirebaseID token!")
    });
  }

  render() {

    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Navbar} />
          <div className='container margin'>
              {this.state.user ? (
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/signup' exact component={Signup} />
                  <Route path='/logout' exact component={Logout} />
                  <Route path='/create' exact component={CreatePost} />
                  <Route path='/friends' exact component={FriendsList} />
                  <Route component={NotFound} />
                </Switch>
              ) : (
                <Switch>
                  <Route path='/login' exact component={Login} />
                  <Route path='/signup' exact component={Signup} />
                  <Route component={Loading} />
                </Switch>
                )
              }
          </div>
        </AuthContext.Provider>
      </HashRouter >

    );
  }
}

export default App;

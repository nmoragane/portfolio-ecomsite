import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './Components/header/header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp';

import {auth} from './firebase/firebase.utils'

class  App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
  
        </Switch>
      </div>
    );
  }

}

export default App;

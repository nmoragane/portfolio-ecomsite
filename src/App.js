import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/header/header';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>

      </Switch>
    </div>
  );
}

export default App;

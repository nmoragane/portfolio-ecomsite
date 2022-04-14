import React, { Component } from 'react'
import CustomButton from '../custom-button/customButton';
import FormInput from '../forminput/formInput';
import {signInWithGoogle} from '../../firebase/firebase.utils'

import './signIn.scss'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name] : value})
    }

  render() {
    return (
      <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
              <FormInput name="email" label="Email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
              
              <FormInput name="password" label="Password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
              
              <div className="buttons">
                <CustomButton type="Submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}  Sign In with Google {' '}</CustomButton>
              </div>

          </form>
      </div>
    )
  }
}


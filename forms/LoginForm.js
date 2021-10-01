import React from "react";
// import InputField from '../components/InputField';
import SubmitButton from "../components/SubmitButton";
import Footer from "../components/Footer";
import Router from 'next/router';
import axios from "axios";
import InputField from "../components/InputField";

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      buttonDisabled: false,
      isAuthenticated: false
    }
  }
  render() {
    return(
      <div className="signInPage">
        <h1>Log In</h1>

        <InputField
          type = 'text'
          placeholder = 'username'
          value = {this.state.username ? this.state.username : ''}
          onChange = {(val) => this.setInputValue('username',val)}
        />

        <InputField
          type = 'password'
          placeholder = 'password'
          value = {this.state.password ? this.state.password : ''}
          onChange = {(val) => this.setInputValue('password',val)}
        />

        <SubmitButton
          text = 'Login'
          disabled = {this.state.buttonDisabled}
          onClick = {() => this.doSignIn()}  
        />
      </div>
    )
  }
}

export default LoginForm;
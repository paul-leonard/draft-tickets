import React from "react";
import SubmitButton from "../components/SubmitButton";
import Router from 'next/router';
import axios from "axios";
import InputField from "../components/InputField";
import styles from '../styles/LoginForm.module.css'


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

  setInputValue(property, val) {
    val = val.trim();
    if(val.length > 64) {
      return;
    }
    this.setState({
      [property]:val
    })
  }

  resetForm(){
    this.setState({
      username:'',
      password:'',
      buttonDisabled:false
    })
  }

  async doSignIn(){
    if(!this.state.username){
      return;
    }
    if(!this.state.password){
      return;
    }
    this.setState({
      buttonDisabled: true
    })

    const url = "https://get-kraken.herokuapp.com/api/v1/token/";

    const response = await axios.post(url, {username:this.state.username, password: this.state.password});

    console.log('log in response was: ', response.data);

    localStorage.setItem('draft-access-token', response.data.access);
    localStorage.setItem('draft-refresh-token', response.data.refresh);
    localStorage.setItem('raw-response', JSON.stringify(response.data));

    // Router.push('http://localhost:3000/');
    Router.push('https://draft-tickets.vercel.app/');
  }

  render() {
    return(
      <div className={styles.login_block}>
        <h2>Log In</h2>

        <InputField
          type = 'text'
          placeholder = 'username: krakenfan2'
          value = {this.state.username ? this.state.username : ''}
          onChange = {(val) => this.setInputValue('username',val)}
        />

        <InputField
          type = 'password'
          placeholder = 'password: uncommon'
          value = {this.state.password ? this.state.password : ''}
          onChange = {(val) => this.setInputValue('password',val)}
        />

        <SubmitButton
          text = 'To the Depths!'
          disabled = {this.state.buttonDisabled}
          onClick = {() => this.doSignIn()}  
        />
      </div>
    )
  }
}

export default LoginForm;
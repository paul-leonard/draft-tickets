import React from "react";
import SubmitButton from "../components/SubmitButton";
import Router from 'next/router';
import axios from "axios";
import InputField from "../components/InputField";


class PrintResponse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results_to_print: localStorage.getItem('raw-response'),
    }
  }

  render() { 
    return (
      <>
        <h1>Printed Response</h1>
        <h3>Printed from State</h3>
        <p>{this.state.results_to_print}</p>
        <h3>Printed from LocalStorage</h3>
        <p>{localStorage.getItem('raw-response')}</p>
      </>
    )
  }
}

export default PrintResponse;
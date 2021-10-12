import React from "react";
import { getSeriesData } from '../services/data-fetcher';
import ListOfSeries from '../components/ListOfSeries';


class PrintResponse extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      results_to_print: [],
      seriesData: ["someinfo"]
    }
  }

  async componentDidMount() {
    const seriesData = await getSeriesData();
    this.setState({ seriesData });
    localStorage.setItem('series-data',JSON.stringify(seriesData));
    
    const results_to_print = localStorage.getItem('raw-response');
    this.setState({results_to_print});
  }

  render() { 
    return (
      <>
        <h1>Printed Response</h1>
        <h3>Printed from State</h3>
        <p>{this.state.results_to_print}</p>
        <h1>List of Series API Data</h1>
        <div>
          <ListOfSeries seriesData = {this.state.seriesData} />
        </div>
        <h3>Series JSON Stringified</h3>
        <p>{JSON.stringify(this.state.seriesData)}</p>
      </>
    )
  }
}

export default PrintResponse;
import React, { Component } from 'react'
import './App.css'
import { response } from 'express';

class App extends Component {

  state = {
    placeholder: []
  }

  componentDidMount(){
    fetch("http://localhost:9000")
      .then(response => response.json())
      .then(espnObject => this.setState({
        placeholder:espnObject
      }))
  }

  render(){
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

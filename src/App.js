import React, { Component } from 'react'
import './App.css'
// import { response } from 'express'
// import { Client } from 'espn-fantasy-football-api'

// const myClient = new Client({leagueId: 20470559})
// console.log(myClient)

// let data = {}

// myClient.getHistoricalScoreboardForWeek({seasonId:2019, scoringPeriodId:13, matchupPeriodId:13}).then((boxscores) => {
  //     data = boxscores
  // })
  // console.log(data) 



class App extends Component {
  
  state = {
    data: []
  }

  componentDidMount(){
    fetch("http://localhost:9000",
    {method:"GET"})
        .then(response => response.json())
        .then(allNFLPlayerObject => this.setState({
          data:allNFLPlayerObject
        })).catch((error) => {
          console.error(error)
        })
    }
    
    
    
    render(){
      console.log(this.state.data)
    return (
      <div className="App">
      </div>
    );
  }
}


export default App;

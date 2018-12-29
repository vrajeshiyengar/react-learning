import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
// import CardView from './CardView/CardView'

class App extends Component {
  state = {
    username: 'Adya'
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {/* <CardView> */}
          <UserInput change={this.handleChange.bind(this)} username={this.state.username} />
          <UserOutput username={this.state.username} />
        {/* </CardView> */}
      </div>
    );
  }
}

export default App;

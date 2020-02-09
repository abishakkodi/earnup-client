import React, { Component } from 'react';
import logo from '../logo.svg';
import Main from './Main';
import '../App.css';
import socket from '../utils/socket';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    socket.on('chat-message', (msg) => {
      console.log('C DID MOUNT SOCKET FIRE');
      let { messages } = this.state;
      messages.push(msg);
      this.setState({ messages});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Main />
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.messages.map((msg,i) => {
              return (<div key={i}>
                <h3>{msg}
                  </h3> </div>)
            })}
          </div> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;

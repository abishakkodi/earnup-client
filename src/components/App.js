import React, { Component } from 'react';
import InputWindow from './InputWindow'
import ChatWindow from './ChatWindow'
import UserModal from './UserModal'
import '../App.css';
import socket from '../utils/socket';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      name: ''
    }
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(name) {
    this.setState(() => ({ name }));
  }

  componentDidMount() {
    socket.on('chat-message', (msg) => {
      let { messages } = this.state;
      messages.push(msg);
      this.setState({ messages });
    });
  }

  render() {
    const loggedIn = this.state.name.length;

    return (
      <div className="App">
        <div className="App-title"> Earn Chat </div>
        <ChatWindow
          messages={this.state.messages} />

        <UserModal
          isVisible={this.state.name}
          setName={this.setUsername} />
        <InputWindow />
      </div>
    );
  }
}

export default App;

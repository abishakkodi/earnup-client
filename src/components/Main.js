import React, { Component } from 'react';
import socket from '../utils/socket';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    handleSendMessage(){
        console.log('Fire send chat');
        socket.emit('chat-message', 'chat sent from client');
    }

    render() {
        return (
            <div>
                <h1> Test </h1>
                <button onClick={this.handleSendMessage}> test send message </button> 
            </div>
        )
    }
}

export default Main;
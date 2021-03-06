import React, { Component } from 'react';
import './InputWindow.css';
import socket from '../utils/socket';

class InputWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitChat = this.handleSubmitChat.bind(this);
    }

    handleInputChange(e) {
        e.persist();
        this.setState(() => ({
            message: e.target.value
        }));
    }

    handleSubmitChat(e) {
        e.preventDefault();
        let { message } = this.state;
        const { name } = this.props;
        // TODO: Do some input validation/sanitization
        if (message) {
            socket.emit('chat-message', { name, message });
            message = '';
            this.setState({ message });
        }
    }

    render() {
        return (
        <div className="InputWindow">
            <form>
                <input
                    type="text"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleSubmitChat}>
                    Send Message
                </button>
            </form>
        </div>)
    }
}

export default InputWindow;
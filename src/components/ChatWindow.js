import React, { Component } from 'react';
import './ChatWindow.css';

class ChatWindow extends Component {
    constructor(props) {
        super(props);

    }

    // TODO: Debug why scroll behavior is not working
    // scrollToBottom = () => {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    //   }
      
    //   componentDidMount() {
    //     this.scrollToBottom();
    //   }
      
    //   componentDidUpdate() {
    //     this.scrollToBottom();
    //   }

    render() {
        return (
            <div className="chat-component">
                <div className='message-window'>
                    {this.props.messages.map((message, index) => (
                        <div key={index}
                            className="message">
                            {message}
                        </div>
                    ))}
                </div>
                {/* <div ref={(el) => { this.messagesEnd = el; }} /> */}
            </div>
        );
    }
}

export default ChatWindow;
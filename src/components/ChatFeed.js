import React, { Component } from 'react';
import './ChatWindow.css';

class ChatFeed extends Component {
    
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
        const myName = this.props.name;
        return (
            <div className="ChatFeed">
                <div className='message-window'>
                    {this.props.messages.map((message, index) => (
                        <div
                            className="message"
                            key={index}>
                            {message.name === myName ? 
                            <div className="message-content-me">  {message.message} </div>
                            : <div className="message-content">  {message.message} </div>}
                            
                            <div className="message-user"> {message.name} </div>
                        </div>
                    ))}
                </div>
                {/* <div ref={(el) => { this.messagesEnd = el; }} /> */}
            </div>
        );
    }
}

export default ChatFeed;
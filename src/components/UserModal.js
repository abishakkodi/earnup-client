import React, { Component } from "react";
import './UserModal.css';


class UsernameModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
    }

    handleInputChange(e) {
        e.persist();
        this.setState(() => ({
            name: e.target.value
        }));
    }

    handleSubmitName(e) {
        e.preventDefault();
        let { name } = this.state;
        // TODO: Do some input validation/sanitization
        if (name) {
            this.props.setName(name);
            name = '';
            this.setState({ name });
        }
    }

    render() {
        return (
            <div className={ this.props.isVisible? "hide" :"UserModal"}>
                <form className="UserModal-Content">
                    <div> Please Enter Username below </div>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleSubmitName}>
                        Login
                </button>
                </form>
            </div>)
    }


}


export default UsernameModal;
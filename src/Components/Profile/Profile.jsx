import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            hasName: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.assignName = this.assignName.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    assignName() {
        this.setState({
            hasName: true,
        });
    }

    render() {
        if (!this.state.hasName) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h1>
                            Lets get know each other?
                        </h1>
                        <input type="text" value={this.state.value} onChange={this.handleChange}
                               placeholder='What is your name?'/>
                    </label>
                    <div>
                        <button onClick={this.assignName}>
                            Send
                        </button>
                    </div>
                </form>
            )
        }
        if (this.state.hasName) {
            return (
                <h1>
                    Hello, {` ${this.state.value}`}
                </h1>
            )
        }
    }
}

export default Profile;
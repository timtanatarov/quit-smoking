import React from "react";
import Clock from "./Clock/Clock";

class Progress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            start: new Date(2022, 12, 3, 11, 26, 0),
            finish: new Date(),
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleFinishChange = this.handleFinishChange.bind(this);
    }

    handleStartChange(){
        this.setState({
            start: new Date(),
        })
    }

    handleFinishChange(){
        this.setState({
            finish: new Date(),
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Your progress:
                </h1>
                <Clock clockData={this.state} onFinishChange={this.handleFinishChange} onStartChange={this.handleStartChange}/>
            </div>
        )
    }
}

export default Progress;
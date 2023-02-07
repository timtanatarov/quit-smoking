import React from 'react';

class Facts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            function () {
                return {
                    counter: this.state.counter + 1,
                }
            }
        );
        if (this.state.counter > this.props.factsData.length - 2) {
            this.setState(
                function () {
                    return {
                        counter: 0,
                    }
                }
            )
        }
    }

    render() {
        const factsData = this.props.factsData;
        const factsList = factsData.map((value) => <h2 key={value.toString()}>{value}</h2>);
        return (
            <div>
                <div>
                    {factsList[this.state.counter]}
                </div>
            </div>
        )
    }
}

export default Facts;
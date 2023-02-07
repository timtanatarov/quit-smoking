import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.refreshStart = this.refreshStart.bind(this);

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.props.onFinishChange()
    }

    refreshStart = () => {
        this.props.onStartChange()
    }

    getPastTime(start, finish) {
        return finish - start;
    }

    getDaysDiff(timeDiff) {
        return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }

    getHoursDiff(timeDiff) {
        return Math.floor(timeDiff / (1000 * 60 * 60) - this.getDaysDiff(timeDiff) * 24);
    }

    getMinutesDiff(timeDiff) {
        return Math.floor(timeDiff / (1000 * 60) - (this.getDaysDiff(timeDiff) * 24 * 60 + this.getHoursDiff(timeDiff) * 60));
    }

    getSecondsDiff(timeDiff) {
        return Math.floor(timeDiff / 1000 - (this.getDaysDiff(timeDiff) * 24 * 60 * 60 + this.getHoursDiff(timeDiff) * 60 * 60 + this.getMinutesDiff(timeDiff) * 60));
    }

    render() {
        return (
            <div>
                <code>{
                    `${this.getDaysDiff(this.getPastTime(this.props.clockData.start, this.props.clockData.finish))} days, 
                     ${this.getHoursDiff(this.getPastTime(this.props.clockData.start, this.props.clockData.finish))} hours,
                     ${this.getMinutesDiff(this.getPastTime(this.props.clockData.start, this.props.clockData.finish))} minutes,
                     ${this.getSecondsDiff(this.getPastTime(this.props.clockData.start, this.props.clockData.finish))} seconds.
                    `
                }
                </code>
                {this.getDaysDiff(this.getPastTime(this.props.clockData.start, this.props.clockData.finish)) ?
                    <h2>Good job! Just go ahead!</h2> :
                    <h2>There's not much left! keep going on!</h2>
                }

                <button onClick={this.refreshStart}>
                    Quit smoking
                </button>
            </div>
        )
    }
}

export default Clock;
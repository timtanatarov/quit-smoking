import React, {useEffect} from 'react';

const Clock = (props) => {
    // debugger;
    const tick = () => {
        props.onFinishChange();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            tick();
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <div>
                {props.pastDays} days {props.pastHours} hours {props.pastMinutes} minutes and {props.pastSeconds} seconds have passed
            </div>
        </div>
    );
};

export default Clock;
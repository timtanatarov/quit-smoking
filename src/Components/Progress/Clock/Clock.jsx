import React, {useEffect} from 'react';

const Clock = (props) => {
    const start = props.start;
    const finish = props.finish;
    const pastTime = finish - start;
    const pastDays = Math.floor(pastTime / (1000 * 60 * 60 * 24));
    const pastHours = Math.floor(pastTime / (1000 * 60 * 60) - pastDays * 24);
    const pastMinutes = Math.floor(pastTime / (1000 * 60) - (pastDays * 24 * 60 + pastHours * 60));
    const pastSeconds = Math.floor(pastTime / 1000 - (pastDays * 24 * 60 * 60 + pastHours * 60 * 60 + pastMinutes * 60));

    // debugger;
    const tick = () => {
        props.onFinishChange();
    };
    const refreshStart = () => {
        props.onStartChange();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            tick();
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <code>
                {pastDays} days {pastHours} hours {pastMinutes} minutes and {pastSeconds} seconds have passed
            </code>
            <div>
                <button onClick={refreshStart}>
                    Quit smoking
                </button>
            </div>
        </div>
    );
};

export default Clock;
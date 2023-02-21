import React, {useState} from "react";
import Clock from "./Clock/Clock";
import s from './Progress.module.css';
import Life from "./Life/Life";

const Progress = (props) => {

    const pastTime = props.finish - props.start;
    const pastDays = Math.floor(pastTime / (1000 * 60 * 60 * 24));
    const pastHours = Math.floor(pastTime / (1000 * 60 * 60) - pastDays * 24);
    const pastMinutes = Math.floor(pastTime / (1000 * 60) - (pastDays * 24 * 60 + pastHours * 60));
    const pastSeconds = Math.floor(pastTime / 1000 - (pastDays * 24 * 60 * 60 + pastHours * 60 * 60 + pastMinutes * 60));

    return (
        <div className={s.mainContainer}>
            <div>
                <Clock
                    pastTime={pastTime}
                    pastDays={pastDays}
                    pastHours={pastHours}
                    pastMinutes={pastMinutes}
                    pastSeconds={pastSeconds}
                    onStartChange={props.onStartChange}
                    onFinishChange={props.onFinishChange}
                />
                <p>
                    You choose health
                </p>
            </div>
            <div>
                {props.smokedCigarettes * 15 * pastDays} minutes
                <p>
                    Life saved
                </p>
            </div>
            <div>
                {
                    (props.boxPrice / props.cigarettesInBox) * props.smokedCigarettes * pastDays
                } rubs
                <p>
                    Money saved
                </p>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Progress;
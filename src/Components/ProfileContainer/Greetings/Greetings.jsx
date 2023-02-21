import React, {useState} from 'react';
import s from './Greetings.module.css'

const Greetings = (props) => {
    return (
            <h1>
                Good to see you, {` ${props.value}`}!
            </h1>
        )
};

export default Greetings;
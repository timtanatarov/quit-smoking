import React, {useState} from 'react';
import s from './Profile.module.css'

const Profile = (props) => {
    return (
            <h1>
                Good to see you, {` ${props.value}`}!
            </h1>
        )
};

export default Profile;
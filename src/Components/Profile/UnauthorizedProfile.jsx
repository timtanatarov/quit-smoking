import React, {useState} from 'react';
import s from './UnauthorizedProfile.module.css'

const unauthorizedProfile = (props) => {
    return (
        <div className={s.mainContainer}>
            <form onSubmit={props.onSubmit}>
                <label>
                    <div className={s.profileName}>
                        <h1>
                            Lets get know each other?
                        </h1>
                        <p>
                            We can make a difference together!
                        </p>
                    </div>
                    <div className={s.inputName}>
                        <input type="text" value={props.value} onChange={props.onChange}
                               placeholder='What is your name?'/>

                        <button onClick={props.onAssigned}>
                            Send
                        </button>
                    </div>
                </label>
            </form>
        </div>
    )
};

export default unauthorizedProfile;
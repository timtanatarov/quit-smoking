import React, {useState} from 'react';
import Greetings from "./Greetings/Greetings";
import UnauthProfile from "./UnauthProfile/UnauthProfile";

const ProfileContainer = (props) => {
    const [value, setValue] = useState('');
    const [hasName, setHasName] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        setValue(event.preventDefault());
    };

    const assignName = () => {
        setHasName(true);
    };

    const unAssignName = () => {
        setHasName(false);
    };

    if (!hasName){
        return (
            <div>
                <UnauthProfile value={value} onChange={handleChange} onSubmit={handleSubmit} onAssigned={assignName}/>
            </div>
        )
    }

    return (
        <div>
            <Greetings value={value}/>
            <div>
                <button onClick={unAssignName}>
                    Logout
                </button>
            </div>
        </div>
    )
};

export default ProfileContainer;
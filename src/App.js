import s from './App.module.css';
import React, {useState} from "react";
import UnauthorizedProfile from "./Components/Profile/UnauthorizedProfile";
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Homepage from "./Components/Homepage";

const data = {
    factsData: [
        'Вы проживете дольше.',
        'Здоровье будет лучше.',
        'Существенно снизится риск тяжелых хронических заболеваний, вызванных потреблением табака.',
        'Вам гораздо легче дышать, легкие сильнее и чище.',
    ],
    // progressData: {
    //     start: new Date(2022, 12, 3, 11, 26, 0),
    //     finish: new Date(),
    // }
}

const App = () => {
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
    if (!hasName) {
        return (
            <div>
                <UnauthorizedProfile value={value} hasName={hasName} onChange={handleChange} onSubmit={handleSubmit}
                                     onAssigned={assignName}/>
            </div>
        );
    }
    if (hasName) {
        return (
            <div>
                < Homepage value={value} factsData={data.factsData}/>
            </div>
        )
    //     return (
    //         <div>
    //             <Header />
    //             <Main />
    //         </div>
    //     );
    }

}

export default App;

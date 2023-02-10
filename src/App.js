import './App.css';
import React from "react";
import Profile from "./Components/Profile/Profile";
import Progress from "./Components/Progress/Progress";
import Facts from "./Components/Facts/Facts";

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
    return (
        <div className="App">
            <fieldset>
                <legend>
                    <h2>
                        Profile
                    </h2>
                </legend>
                <Profile/>
            </fieldset>
            <fieldset>
                <legend>
                    <h2>
                        Facts
                    </h2>
                </legend>
                <Facts factsData={data.factsData}/>
            </fieldset>
            <fieldset>
                <legend>
                    <h2>
                        Your progress
                    </h2>
                </legend>
                <Progress/>
            </fieldset>
        </div>
    );
}

export default App;

import s from './App.module.css';
import React, {useState} from "react";
import Header from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import HomepageContainer from "./Components/HomepageContainer/HomepageContainer";
import EditGoalsContainer from "./Components/EditGoalsContainer/EditGoalsContainer";
import ProfileContainer from "./Components/ProfileContainer/ProfileContainer";

const data = {
    factsData: [
        'Вы проживете дольше.',
        'Здоровье будет лучше.',
        'Существенно снизится риск тяжелых хронических заболеваний, вызванных потреблением табака.',
        'Вам гораздо легче дышать, легкие сильнее и чище.',
    ],
}

const App = () => {
    const [start, setStart] = useState(new Date(2022, 12, 3, 11, 26, 0),);
    const [finish, setFinish] = useState(new Date());
    const [smokedCigarettes, setSmokedCigarettes] = useState(6);
    const [boxPrice, setBoxPrices] = useState(200);
    const [cigarettesInBox, setCigarettesInBox] = useState(20);

    // start
    const handleStartChange = () => {
        setStart(new Date());
    };

    const handleFinishChange = () => {
        setFinish(new Date());
    };

    const handleStartSubmit = (event) => {
        setStart(event.preventDefault);
    }

    // smoked cigarettes
    const handleSmokedCigarettesChange = (event) => {
        setSmokedCigarettes(event.target.value);
    };

    const handleSmokedCigarettesSubmit = (event) => {
        setSmokedCigarettes(event.preventDefault());
    };

    // box price
    const handleBoxPricesChange = (event) => {
        setBoxPrices(event.target.value);
    };
    const handleBoxPricesSubmit = (event) => {
        setBoxPrices(event.preventDefault());
    };

    // cigarettes on box
    const handleCigarettesInBoxChange = (event) => {
        setCigarettesInBox(event.target.value);
    };

    const handleCigarettesInBoxSubmit = (event) => {
        setCigarettesInBox(event.preventDefault());
    }


    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/homepage'
                       element={<HomepageContainer
                           factsData={data.factsData}
                           start={start} finish={finish}
                           onStartChange={handleStartChange}
                           onFinishChange={handleFinishChange}
                           smokedCigarettes={smokedCigarettes}
                           boxPrice={boxPrice}
                           cigarettesInBox={cigarettesInBox}
                       />}/>
                <Route path='/edit_goals' element={<EditGoalsContainer
                    start={start}
                    onStartChange={handleStartChange}
                    onStartSubmit={handleStartSubmit}
                    smokedCigarettes={smokedCigarettes}
                    onSmokedCigarettesChange={handleSmokedCigarettesChange}
                    onSmokedCigarettesSubmit={handleSmokedCigarettesSubmit}
                    boxPrice={boxPrice}
                    onBoxPriceChange={handleBoxPricesChange}
                    onBoxPriceSubmit={handleBoxPricesSubmit}
                    cigarettesInBox={cigarettesInBox}
                    onCigarettesInBoxChange={handleCigarettesInBoxChange}
                    onCigarettesInBoxSubmit={handleCigarettesInBoxSubmit}
                />}/>
                <Route path='/profile' element={<ProfileContainer/>}/>
            </Routes>

        </div>
    );
};

export default App;

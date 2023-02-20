import React, {useState} from "react";
import Clock from "./Clock/Clock";
import s from './Progress.module.css';
import Life from "./Life/Life";

const Progress = (props) => {
    const [start, setStart] = useState(new Date(2022, 12, 3, 11, 26, 0),);
    const [finish, setFinish] = useState(new Date());
    const [smokedCigarettes, setSmokedCigarettes] = useState(6);
    const [boxPrice, setBoxPrices] = useState(200);
    const [cigarettesInBox, setCigarettesInBox] = useState(20);

    const handleStartChange = () => {
        setStart(new Date());
    };

    const handleFinishChange = () => {
        setFinish(new Date());
    };

    return (
        <div className={s.mainContainer}>
            <h1>Условно пачка стоит 200 руб, в пачке 20 сиг, 6 сиг в день</h1>
            <div>
                <Clock start={start} finish={finish} onStartChange={handleStartChange} onFinishChange={handleFinishChange}/>
                <p>
                    You choose health
                </p>
            </div>
            <div>
                {smokedCigarettes * 15} minutes
                <p>
                    Life saved
                </p>
            </div>
            <div>
                {
                    (boxPrice / cigarettesInBox) * smokedCigarettes
                } rubs
                <p>
                    Money saved
                </p>
            </div>
            <div>
                <button>
                    Change targets
                </button>
            </div>
        </div>

    )
}

export default Progress;
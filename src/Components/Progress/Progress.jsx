import React, {useState} from "react";
import Clock from "./Clock/Clock";
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
        <div>
            <p>Условно пачка стоит 200 руб, в пачке 20 сиг, 6 сиг в день</p>
            <h1>
                Time:
            </h1>
            <Clock start={start} finish={finish} onStartChange={handleStartChange} onFinishChange={handleFinishChange}/>
            <h1>
                Extended life:
            </h1>
            {smokedCigarettes * 15} minutes
            <h1>
                Money saved:
            </h1>
            {
                (boxPrice / cigarettesInBox) * smokedCigarettes
            } rubs
        </div>

    )
}

export default Progress;
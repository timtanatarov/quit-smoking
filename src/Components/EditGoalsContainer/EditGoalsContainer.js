import {useState} from "react";
import EditSmokedCigarettes from "./EditSmokedCigarettes/EditSmokedCigarettes";
import EditCigarettesInBox from "./EditCigarettesInBox/EditCigarettesInBox";
import EditBoxPrice from "./EditBoxPrice/EditBoxPrice";
import EditStart from "./EditStart/EditStart";

const EditGoalsContainer = (props) => {
    const [save, setSave] = useState(true);
    const handleSaveChange = () => {
        setSave(false);
    };
    const handleUnSaveChange = () => {
        setSave(true);
    };
    if (save){
        return(
            <div>
                <div>
                    <div>
                        {props.start.toString()} Вы бросили курить
                    </div>
                    <div>
                        {props.smokedCigarettes} сигарет Вы выкуривали в день
                    </div>
                    <div>
                        {props.cigarettesInBox} сигарет было в одной пачке
                    </div>
                    <div>
                        {props.boxPrice} стоила пачка сигарет
                    </div>
                    <div>
                        <button onClick={handleSaveChange}>
                            Изменить
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (!save){
        return (
            <div>
                <h1>
                    Edit goals
                </h1>
                <div>
                    {/*<div>*/}
                    {/*    <EditStart start={props.start}*/}
                    {/*               onStartChange={props.onStartChange}*/}
                    {/*               onStartSubmit={props.onStartSubmit}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div>
                        <EditSmokedCigarettes smokedCigarettes={props.smokedCigarettes}
                                              onSmokedCigarettesChange={props.onSmokedCigarettesChange}
                                              onSmokedCigarettesSubmit={props.onSmokedCigarettesSubmit}
                        />
                    </div>
                    <div>
                        <EditCigarettesInBox cigarettesInBox={props.cigarettesInBox}
                                             onCigarettesInBoxChange={props.onCigarettesInBoxChange}
                                             onCigarettesInBoxSubmit={props.onCigarettesInBoxSubmit}
                        />
                    </div>
                    <div>
                        <EditBoxPrice boxPrice={props.boxPrice}
                                      onBoxPriceChange={props.onBoxPriceChange}
                                      onBoxPriceSubmit={props.onBoxPriceSubmit}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={handleUnSaveChange}>
                        Сохранить изменения
                    </button>
                </div>
            </div>
        );
    }
};

export default EditGoalsContainer;
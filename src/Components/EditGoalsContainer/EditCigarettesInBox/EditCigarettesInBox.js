import React from "react";

const EditCigarettesInBox = (props) => {

    return (
        <div>
            <form onSubmit={props.onCigarettesInBoxSubmit}>
                <label>
                    <div>
                        Сколько сигарет было в одной пачке?
                    </div>
                    <div>
                        <input type="number" value={props.cigarettesInBox} onChange={props.onCigarettesInBoxChange}
                               placeholder='Введите только число'/>
                    </div>
                </label>
            </form>
        </div>
    )
};

export default EditCigarettesInBox;
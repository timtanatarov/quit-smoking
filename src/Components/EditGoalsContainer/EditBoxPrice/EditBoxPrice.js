import React from "react";

const EditBoxPrice = (props) => {

    return (
        <div>
            <form onSubmit={props.onBoxPriceSubmit}>
                <label>
                    <div>
                        Сколько стоила пачка сигарет??
                    </div>
                    <div>
                        <input type="number" value={props.boxPrice} onChange={props.onBoxPriceChange}
                               placeholder='Введите только число'/>
                    </div>
                </label>
            </form>
        </div>
    )
};

export default EditBoxPrice;
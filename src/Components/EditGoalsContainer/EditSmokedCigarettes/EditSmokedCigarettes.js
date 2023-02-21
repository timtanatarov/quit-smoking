import React from "react";

const EditSmokedCigarettes = (props) => {

    return (
        <div>
            <form onSubmit={props.onSmokedCigarettesSubmit}>
                <label>
                    <div>
                            Сколько сигарет в день Вы выкуриваете?
                    </div>
                    <div>
                        <input type="number" value={props.smokedCigarettes} onChange={props.onSmokedCigarettesChange}
                               placeholder='Введите только число'/>
                    </div>
                </label>
            </form>
        </div>
    )
};

export default EditSmokedCigarettes;
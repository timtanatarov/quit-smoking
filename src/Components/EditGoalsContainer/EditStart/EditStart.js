import React from "react";

const EditStart = (props) => {

    return (
        <div>
            <form onSubmit={props.onStartSubmit}>
                <label>
                    <div>
                        Когда Вы бросили курить?
                    </div>
                    <div>
                        <input type="datetime-local" value={props.start} onChange={props.onStartChange}
                               placeholder='Введите дату'/>
                    </div>
                </label>
            </form>
        </div>
    )
};

export default EditStart;
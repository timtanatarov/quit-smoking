import Facts from "./Facts/Facts";
import Progress from "./Progress/Progress";
import s from './HomepageContainer.module.css'

const HomepageContainer = (props) => {
    return (
        <div className={s.mainContainer}>
            <div>
                <Facts factsData={props.factsData}/>
            </div>
            <div>
                <Progress start={props.start} finish={props.finish} onStartChange={props.onStartChange}
                          onFinishChange={props.onFinishChange} smokedCigarettes={props.smokedCigarettes}
                          boxPrice={props.boxPrice} cigarettesInBox={props.cigarettesInBox}/>
            </div>
            <a href="/edit_goals">
                <button>Edit goals</button>
            </a>
        </div>
    )
};

export default HomepageContainer;
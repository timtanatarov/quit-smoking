import s from "../../../App.module.css";
import Greetings from "../../ProfileContainer/Greetings/Greetings";
import Facts from "../Facts/Facts";
import Progress from "../Progress/Progress";
import React from "react";

const Homepage = (props) => {
  return (
      <div>
          <div>
              <div className={s.appFlexContainer}>
                  <div className={s.appFlexBox}>
                      <Facts factsData={props.factsData}/>
                  </div>
                  <div className={s.appFlexBox}>
                      <Progress/>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Homepage;
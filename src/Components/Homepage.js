import Header from "./Header/Header";
import s from "../App.module.css";
import Profile from "./Profile/Profile";
import Facts from "./Facts/Facts";
import Progress from "./Progress/Progress";
import React from "react";

const Homepage = (props) => {
  return (
      <div>
          <div>
              <Header/>
              <div className={s.appFlexContainer}>
                  <div className={s.appFlexBox}>
                      <Profile value={props.value}/>
                  </div>
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
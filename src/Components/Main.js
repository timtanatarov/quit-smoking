import React from "react";
import Homepage from "./Homepage";
import { Routes ,Route } from 'react-router-dom';


const Main = (props) => {
  return (
      <div>
          <Routes>
              <Route exact path='/Homepage' component={<Homepage/>}/>
          </Routes>
      </div>
  )
};

export default Main;
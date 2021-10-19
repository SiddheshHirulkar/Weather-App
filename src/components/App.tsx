import React, { Component, Fragment } from "react";
import { Search } from './Search';
import { CityAndDate } from "./CityAndDate";
import { Status } from "./Status";
import { TemperatureMsg } from "./TemperatureMsg"; 
import { SunriseAndSunset } from "./SunriseAndSunset";
import { Details } from "./Details";
import './app.scss';

class App extends Component {
  render() {
    return(
      <Fragment>
        <div className="row justify-content-lg-end justify-content-md-end justify-content-sm-center">
          <div className="col-lg-2 col-md-4 col-sm-4"><Search /></div>
        </div>
        <div className="container">
          <div className="row justify-content-center m-3">
            <div className="col-lg-3 col-md-4 col-sm-4"><CityAndDate /></div>
          </div>
          <div className="row justify-content-lg-start justify-content-md-start justify-content-sm-center small-screen-container mt-5">
            <div className="col-lg-3 col-md-4 col-sm-4"><Status /></div>
          </div>
          <div className="row justify-content-lg-between justify-content-md-between justify-content-sm-center mt-2">
            <div className="col-lg-3 col-md-4 col-sm-8"><TemperatureMsg /></div>
            <div className="col-lg-3 col-md-4 col-sm-8 sm-mt-10"><SunriseAndSunset /></div>
          </div>
          <div className="row mt-5">
            <div className=""><Details /></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

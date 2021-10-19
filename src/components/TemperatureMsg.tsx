import React, {Component, Fragment} from "react";

export class TemperatureMsg extends Component {
  render() {
    return(
      <Fragment>
        <div className="text-white row justify-content-sm-center small-screen-container">
          <div className="temperature-reading me-3 col-lg-7 col-md-7 col-sm-5 col-xs-5 margin-right-0">22℃</div>
          <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3 d-flex flex-column justify-content-center">
            <p className="mb-0 h5 p-2">21℃</p>
            <p className="mb-0 h5 p-2">22℃</p>
          </div>
        </div>
        <div className="text-align-center text-align-sm-center">
          <span className="text-white">feels like 21℃</span>
        </div>
      </Fragment>
    );
  };
};

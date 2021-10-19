import React, {Component, Fragment} from "react";

export class SunriseAndSunset extends Component {
  render() {
    return(
      <Fragment>
        <div className="d-flex flex-row text-white flex-justify-center justify-content-sm-center">
          <div className="p-2">Sunrise</div>
          <div className="vertical-seperator"></div>
          <div className="p-2">Sunset</div>
        </div>
      </Fragment>
    );
  };
};

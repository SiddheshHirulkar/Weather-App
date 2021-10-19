import React, {Component, Fragment} from "react";

export class Details extends Component {
  render() {
    return(
      <Fragment>
        <div className="text-white row">
          <section className="col-11 row text-center">
            <span className="col-lg-1 col-md-2 col-sm-2 col-xs-2 margin-right-20 margin-left-10">Details</span>
            <span className="col-lg-11 col-md-10 col-sm-10 mt-3 col-xs-10 horizontal-line"></span>
          </section>
          <section className="col-11 mt-4 row justify-content-center align-items-center text-center">
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-half-2">Feels like</div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-half-2">Pressure</div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-half-2">Wind Speed</div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-half-2">Wind Temperature</div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-half-2">Humidity</div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-half-2">Visibility</div>
          </section>
          <section className="col-11 xs-horizontal-line my-4 justify-content-center">
            <div className="horizontal-line"></div>
          </section>
        </div>
      </Fragment>
    );
  };
};

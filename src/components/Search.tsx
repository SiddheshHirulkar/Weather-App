import React, {Component, Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

interface AppProps {

}

interface AppState {
  locationChange: string;
}

export class Search extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      locationChange: ''
    }
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ locationChange: e.currentTarget.value });
  }
  
  render() {
    return(
      <Fragment>
        <div className="input-group p-2">
          <input 
            type="text"
            value={this.state.locationChange}
            onChange={this.handleChange}
            className="form-control search-input" 
            placeholder="Enter City" 
          />
          <span className="input-group-text icon-container" id="basic-addon2"><FontAwesomeIcon className='icon-color' icon={faLocationArrow} /></span>
        </div>
      </Fragment>
    );
  };
};

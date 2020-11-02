import React from "react";
import "./Country.css";
import countriesjson from "./countries.json";
class Country extends React.Component {
  getvalue = (e) => {
    let { value } = e.target;
    console.log("sdsdsdsd");
    console.log(value);

    this.props.oncountryupdate(value);
  };
  state = {
    totalinfected: "Loading ...",
    totalcured: "Loading ...",
    totaldeath: "Loading ...",
  };

  render() {
    return (
      <div>
        <div className="dropdown">
          <div className="label">
            <label className="lbl" for="drop">
              Choose a Country:
            </label>
          </div>
          <div className="select">
            <select
              className="slc"
              name="drop"
              id="drop"
              onChange={this.getvalue}
            >
              <option className="opt"></option>
              {countriesjson.map((a) => {
                return (
                  <option className="opt" value={a.name}>
                    {a.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="curve"></div>
      </div>
    );
  }
}
export default Country;

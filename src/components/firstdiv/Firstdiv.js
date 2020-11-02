import React from "react";
import "./Firstdiv.css";
import MenuIcon from "@material-ui/icons/Menu";

class Firstdiv extends React.Component {
  render() {
    return (
      <div className="bigdiv">
        <div className="hdiv">
          <h1>
            COVID-<span>19</span>
          </h1>
        </div>
        <div className="menudiv">
          <MenuIcon fontSize="large"></MenuIcon>
        </div>
      </div>
    );
  }
}
export default Firstdiv;

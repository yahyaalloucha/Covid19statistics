import React from "react";
import corona from "./corona.jpg";
import "./seconddiv.css";

function Seconddiv() {
  return (
    <div className="didi">
      <div className="difcorona">
        <p>+188 countries are effected by </p>
        <span className="corona">Corona</span>
        <p>
          this virus was first reported in wuhan ,hubel china on 17 november
          2019 ,and on 11 March 2020, the World Heath Organization "WHO"
          Declared the outbreak a pandimic
        </p>
        <h2 className="about">about covid19</h2>
      </div>
      <div className="imgcorona">
        <img src={corona} alt="corona" className="imgi" />
      </div>
    </div>
  );
}
export default Seconddiv;

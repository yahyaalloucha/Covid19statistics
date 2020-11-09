import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import React from "react";
import "./Liveupdate.css";

class Liveupdate extends React.Component {
  state = {
    totalinfected: "Loading ...",
    totalcured: "Loading ...",
    totaldeath: "Loading ...",
  };
  componentDidMount = async () => {
    var url = "https://coronavirus-19-api.herokuapp.com/all";

    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      totalinfected: data.cases,
      totaldeath: data.deaths,
      totalcured: data.recovered,
    });
    this.props.onUpdate(data.cases, data.deaths, data.recovered);

    this.a = setInterval(async () => {
      const url = "https://coronavirus-19-api.herokuapp.com/all";

      const response = await fetch(url);
      const data = await response.json();
    }, 3000);
  };

  render() {
    return (
      <div className="liveupdate">
        <div className="live">
          <FiberManualRecordIcon className="icon1"></FiberManualRecordIcon>
          <h1>World Wide Live Updates</h1>
        </div>
        <div className="divofstatistiques">
          <div className="statiquesnames">
            <div className="firstone2">
            <div className="hr"><h2 className="hR">totalcured</h2></div>
            <div className="pSR"><p className="numofR">{this.state.totalcured}</p></div>
            </div>
          </div>
          <div className="statiquesnames">
          <div className="firstone2">
          <div className="hr"><h2 className="hD">totaldeath</h2></div>
            <div className="pSD"><p className="numofD">{this.state.totaldeath}</p></div>
            </div>
          </div>
          <div className="statiquesnames">
          <div className="firstone2">
            <div className="hr"><h2 className="hC">totalinfected</h2></div>
            <div className="pSC"><p className="numofC">{this.state.totalinfected}</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Liveupdate;

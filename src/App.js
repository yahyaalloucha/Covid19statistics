import React from "react";

import { Component } from "react";
import "./App.css";
import Firstdiv from "./components/firstdiv/Firstdiv";

import Seconddiv from "./components/seconddiv/Seconddiv";
import Liveupdate from "./components/Liveupdate/Liveupdate";
import Country from "./components/Country/Country";
import Parte from "./components/partecharts/Parte";
import Directory from "./components/Directoryfile/Directory";

class App extends Component {
  state = {
    cases: null,
    deaths: null,
    recoverd: null,
    country: undefined,
  };

  componentDidMount = () => {
    this.setState({ country: null });
  };

  onLive = (c, d, r) => {
    this.setState({ cases: c, deaths: d, recoverd: r });
  };
  oncountry = async (a) => {
    var urlC = "https://coronavirus-19-api.herokuapp.com/countries/" + a;
    const data = await fetch(urlC);
    const res = await data.json();

    this.setState({
      country: a,
      cases: res.cases,
      deaths: res.deaths,
      recoverd: res.recovered,
    });
  };

  render() {
    return (
      <div className="App">
        <Firstdiv></Firstdiv>
        <Seconddiv className="x"></Seconddiv>
        <Liveupdate onUpdate={this.onLive}></Liveupdate>
        <Country oncountryupdate={this.oncountry}></Country>
        <Parte
          cases={this.state.cases}
          deaths={this.state.deaths}
          recoverd={this.state.recoverd}
        ></Parte>
        <Directory country={this.state.country}></Directory>
      </div>
    );
  }
}
export default App;

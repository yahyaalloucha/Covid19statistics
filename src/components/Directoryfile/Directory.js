import React from "react";
import { Line } from "react-chartjs-2";
import "./Directoey.css";

import getDates from "./getdate.js";
class Directory extends React.Component {
  state = {
    LastDataC: null,
    LastDataR: null,
    LastDataD: null,
  };
  componentDidMount = () => {
    
    var dates = getDates();

    this.setState({ dates });
  };
  componentDidUpdate = async (prevProps) => {
    if (this.props.country !== prevProps.country) {
      console.log("sds");
      var count = this.props.country;
      var url = null;
      if (count == null || count == "") {
        url = "https://api.covid19api.com/world";
        const response = await fetch(url);
        const data = await response.json();

        var lastMonthDatad = [];
        var lastMonthDatac=[];
        var lastMonthDatar=[];
        console.log(data)

        for (var i = data.length - 1; i > data.length - 29; i--) {
          
          lastMonthDatad.push(data[i].NewDeaths);
          lastMonthDatac.push(data[i].NewConfirmed);
          lastMonthDatar.push(data[i].NewRecovered);
          console.log(data[i].NewDeaths)
          
        }
        this.setState({
          LastDataD: lastMonthDatad,
          LastDataC:lastMonthDatac,
          LastDataR: lastMonthDatar,

        });
      } else {
        url = "https://api.covid19api.com/dayone/country/" + count;
        const response = await fetch(url);
        const data = await response.json();
      }
    }
  };

  render() {
    console.log(this.state.LastDataC);
    const data = {
      labels: this.state.dates,
      datasets: [
        {
          label: "My First dataset",
          yAxisID: "A",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.LastDataD,
          
        },{
          data: this.state.LastDataC,
          yAxisID: "B",
          borderColor: "yellow",
          borderJoinStyle: "miter",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        }
        
      ],
      
    
    };
    return (
      <div className="linecharts">
        <Line
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  id: "A",
                  type: "linear",
                  position: "left",

                  ticks: {
                    beginAtZero: true,
                    fontColor: "black",
                    
                  },
                 
                },{
                  id: 'B',
                  type: 'linear',
                  position: 'right',
                  ticks: {
                    fontColor:"black"
                  }
          
                
                
                }],
              xAxes: [
                {
                  ticks: {
                    fontColor: "black",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
export default Directory;

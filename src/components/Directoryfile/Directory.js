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
      if (count === null || count === "") {
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
        var  url1 = "https://api.covid19api.com/total/dayone/country/" + count;
        const response = await fetch(url1);
        const data = await response.json();
        var colastMonthDatad = [];
          var colastMonthDatac=[];
          var colastMonthDatar=[];
        
        for(var j= data.length-2;j>data.length-29;j--){
          
          colastMonthDatad.push((data[j].Deaths)-(data[j-1].Deaths));
          colastMonthDatac.push((data[j].Confirmed)-(data[j-1].Confirmed));
          colastMonthDatar.push((data[j].Recovered)-(data[j-1].Recovered));
            
             

        }
        this.setState({
          LastDataD: colastMonthDatad,
          LastDataC:colastMonthDatac,
          LastDataR: colastMonthDatar,

        })
        console.log(count);
        console.log(colastMonthDatad);

      }
    }
  };

  render() {
    console.log(this.state.LastDataCt);
    const data1 = {
      labels: this.state.dates,
      datasets: [
        {
          label: "NewDeaths",
          yAxisID: "A",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "red",
          borderColor: "red",
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
          
        },
        
        
      ],
      
    
    };
    const data2 ={
      labels: this.state.dates,
      datasets: [
        {
          label:"NewConfirmed",
          data: this.state.LastDataC,
          yAxisID: "B",
          fill:true,
          borderColor: "yellow",
          backgroundColor:"#F7DE1F",
          borderDash: [],
          borderCapStyle: "butt",
          borderJoinStyle: "miter",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        
        }
      ]
      

    };
    const data3={
      labels:this.state.dates,
      datasets:[
        {
          
            label:"NewRcorvered",
            data:this.state.LastDataR,
            yAxisID:"R",
            
            borderColor:"#FFA500",
            borderCapStyle: "butt",
            borderJoinStyle: "miter",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
  
          
        }
      ]
    }
    return (
      <div className="aboutlines">
        <div className="linecharts" id="linecharts1"><Line
          data={data1}
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
                    fontColor: "red",
                    
                  },
                },
                  

                ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white",
                  },
                },
              ],
            },
          }}
        /></div>
         <div className="linecharts">
         <Line
          data={data2}
          options={{
            maintainAspectRatio: false,
            scales:{
                yAxes:[
                  {
                    
                      id: 'B',
                      type: 'linear',
                      position: 'left',
                      ticks: {
                        fontColor:"yellow"
                      }
              
                    
                    
                    
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: "white",
                  },
                }]


            }
            
            
            }}/>


         </div>
        <div className="linecharts">

        <Line
            data={data3}
            options={{
              maintainAspectRatio: false,
              scales:{
                  yAxes:[
                    {

                      id:'R',
                  type:'linear',
                  ticks:{
                    fontColor:"#FFA500",

                  }

                    }
                  ],
                  xAxes:[
                    {
                      ticks: {
                        fontColor: "white",
                      },

                    }
                  ]

              }
            }}
            
            
            />



        </div>
        
            
            
      </div>
    );
  }
}
export default Directory;

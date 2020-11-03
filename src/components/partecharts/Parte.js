import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./Parte.css";

class Parte extends React.Component {
  render() {
    const { cases, deaths, recoverd } = this.props;
    const data = {
      datasets: [
        {
          data: [cases, deaths, recoverd],
          backgroundColor: ["yellow", "red", "orange"],
        },
      ],
      labels: ["Cases", "Deaths", "Recoverd"],
    };

    return cases == null ? (
      <div>Loading...</div>
    ) : (
      
      <div>
        <div className="besave"></div>
        <div className="pieChart">
        <Doughnut
          data={data}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontColor: "blue",
                fontSize: 18,
              },
            },
          }}
        />
      </div>
      </div>
      
    );
  }
}
export default Parte;

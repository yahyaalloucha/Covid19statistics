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
      
      <div className="parte">
        <div className="besave">
          <h1 className="tit">How to be save </h1>
      
          <div className="besave"><p className="howtobesave">What can I do to avoid becoming ill?
The best way to prevent illness is to avoid being exposed to the COVID-19 virus. The CDC and WHO recommend following these precautions:

Keep at least 6 feet (2 meters) of distance between yourself and people outside your household.
Wash your hands often with soap and water for at least 20 seconds, or use an alcohol-based hand sanitizer that contains at least 60% alcohol.
Wear a mask in public places, especially when social distancing is difficult.
Cover your mouth and nose with your elbow or a tissue when you cough or sneeze. Throw away the used tissue.
Avoid touching your eyes, nose and mouth.
Clean and disinfect surfaces you often touch on a daily basis.
If you have a chronic medical condition and may have a higher risk of serious illness, check with your doctor about other ways to protect yourself.

Should I wear a mask?
The CDC and WHO recommend that people wear cloth face coverings in public when social distancing is difficult. This advice is based on evidence that people with COVID-19 can transmit the COVID-19 virus before they realize they have it.

Using masks in public may help reduce the spread from people who don't have symptoms. Non-medical cloth masks are recommended for the public. Surgical masks may be used if available. In some locations, surgical masks and N-95 respirators are in short supply and should be reserved for health care providers.</p></div> 
  
        

        </div>
        <div className="pieChart">
        <Doughnut
          data={data}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontColor: "blue",
                fontSize: 15,
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

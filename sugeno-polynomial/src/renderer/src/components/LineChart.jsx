import React, {useRef, useEffect} from 'react';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { mfs } from '../classes/utils';

ChartJS.register(annotationPlugin);
ChartJS.defaults.color = "#c2c2c2";
ChartJS.defaults.font.family = "Courier New"; 
ChartJS.defaults.font.size = "14px"; 
ChartJS.defaults.elements.line.borderWidth = 2;

const labels = Array.from({length: 202}, (_, i) => (i-101)*0.25);
// const labels = Array.from({length: 51}, (_, i) => (i - 25)) 
const datasets = {
  labels: labels,
  datasets: Array.from({length: 202}, (_, i) => {
    return {
      label: (i - 101) * 0.25,
      data: Array.from({length: 202}, (_, d) => mfs[i].calculate((d-101)*0.25)),  
      fill: false,
      backgroundColor: "#7c3aed",
      borderColor: "#7c3aed",
    }
  }
)};

const LineChart = ({userInput}) => {

  const chartRef = useRef();

  return (
    <Chart
    ref={chartRef}
    type='line' 
    data={datasets}
    options={{
      radius: 0,
      scales: {
        x: {
          // min: -25,
          // max: 25,
          ticks: {
            minRotation: 90,
            maxRotation: 90,
            // stepSize: 1,
            // callback: function(value, index, ticks) {
            //   return (value - 101) * 0.25;
            // },
          },
        },
        y: {
          min: 0,
          max: 1,
          ticks: {
            stepSize: .1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Membership Functions"
        },
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              xMin: (parseInt(userInput) * 4 + 101),
              xMax: (parseInt(userInput) * 4 + 101),
              yMin: 0,
              yMax: 1,
              borderColor: "white",
              // borderColor: "#f43f5e",
              borderWidth: 3,
              borderDash: [5, 5],
              label: {
                enabled: true,
                content: "Test"
              },
            }
          ]
        }
      },
    }}
    />
  )
}

export default LineChart
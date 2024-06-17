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

const labels = Array.from({length: 101}, (_, i) => (i-50)*0.1);

const datasets = {
  labels: labels,
  datasets: Array.from({length: 101}, (_, i) => {
    if ((i-50) / 10 % 1 != 0) {
      return {
        data: Array(101).fill(0),
        fill: false,
        backgroundColor: "transparent",
        borderColor: "transparent"
      };

  } else {
    return {
      label: i-5,
      data: Array.from({length: 101}, (_, d) => mfs[parseInt((i-50) / 10)+5].calculate((d-50)*0.1)),  
      fill: false,
      backgroundColor: "#7c3aed",
      borderColor: "#7c3aed",
    }
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
          min: -5,
          ticks: {
            callback: function(value, index, ticks) {
              return (value-50)/10;
            },
            maxTicksLimit: 11,
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
              xMin: (parseFloat(userInput) * 10) + 50,
              xMax: (parseFloat(userInput) * 10) + 50,
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
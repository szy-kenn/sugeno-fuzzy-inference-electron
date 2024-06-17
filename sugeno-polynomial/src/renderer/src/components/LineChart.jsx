import React, {useRef, useEffect} from 'react';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { initMembershipFunctions } from '../classes/utils';

ChartJS.register(annotationPlugin);
ChartJS.defaults.color = "white";
ChartJS.defaults.font.family = "Courier New"; 
ChartJS.defaults.font.size = "14px"; 
ChartJS.defaults.elements.line.borderWidth = 1;

const mfs = initMembershipFunctions();
const labels = Array.from({length: 219}, (_, i) => (i-110)*0.05);

const datasets = {
  labels: labels,
  datasets: Array.from({length: 11}, (_, i) => (
    {
      label: i-5,
      data: Array.from({length: 11}, (_, d) => mfs[i].calculate(d-5)),  
      fill: false,
      backgroundColor: "#3B82F6",
      borderColor: "#3B82F6"
    }
  ))
}

const LineChart = ({userInput}) => {

  const chartRef = useRef();

  return (
    <Chart
    ref={chartRef}
    type='line' 
    data={datasets}
    options={{
      
      scales: {
        x: {
          min: -5,
          max: 5,
          ticks: {
            callback: function(value, index, ticks) {
              return parseFloat((value - 110) * 0.05).toFixed(2);
            },
            stepSize: 1,
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
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              xMin: parseInt(userInput) + 5,
              xMax: parseInt(userInput) + 5,
              yMin: 0,
              yMax: 1,
              borderColor: "#4ade80",
              borderWidth: 2,
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
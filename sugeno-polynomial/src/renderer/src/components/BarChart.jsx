import React from 'react';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

ChartJS.register(annotationPlugin);
const BarChart = ({data}) => {

  return (
    <Chart
    type='bar' 
    data={{
      labels: ['(-135)', '(-72)', '(-33)', '(-12)', '(-3)', '(0)', '(3)', '(12)', '(33)', '(72)', '(135)'],
      datasets: [
        {
          id: 1,
          data: data,
          backgroundColor: "#7c3aed",
          borderWidth: 4,
          borderColor: "#5b21b6",
          fill: true,
        },
      ],
    }}
    options={{
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
              weight: "bold"
            }
          },
          grid: {
            color: "transparent"
          },
        },
        y: {
          min: 0,
          max: 1,
          ticks: {
            stepSize: .1
          },
          grid: {
            color: "rgba(167, 139, 250, .25)"
          },
        }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
    />
  )
}

export default BarChart
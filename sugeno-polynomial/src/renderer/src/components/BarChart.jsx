import React from 'react';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

ChartJS.register(annotationPlugin);
const BarChart = ({data}) => {

  const annotations = []

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== 0) {
      annotations.push({
        type: "line",
        mode: "horizontal",
        xMin: -1,
        xMax: i,
        yMin: data[i],
        yMax: data[i],
        borderColor: "#7c3aed",
        borderWidth: 1,
        label: {
          enabled: true,
          content: "Test"
        },
      })
    }
  }
  
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
          borderColor: "#7c3aed",
          borderWidth: 4,
          fill: true,
          barThickness: "10"
        },
        {
          id: 1,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          backgroundColor: "#1d2031",
          borderColor: "#1d2031",
          borderWidth: 4,
          fill: true,
          barThickness: "10"
        },
      ],
    }}
    options={{
      scales: {
        x: {
          stacked: true,
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
            display: true,
            autoSkip: false,
            stepSize: 0.01,
            callback: function(value, idx, values) {
              return (data.includes(value.toFixed(2).toString()) ? value : "")
            },
          },
        }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Consequent (z)"
          },
          annotation: {
            annotations: annotations
          }
        },
      }
    }
    />
  )
}

export default BarChart
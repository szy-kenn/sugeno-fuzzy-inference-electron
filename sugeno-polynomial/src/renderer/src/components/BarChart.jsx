import React from 'react';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

ChartJS.register(annotationPlugin);
const BarChart = ({data, labels}) => {

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
      labels: labels,
      // labels: ['(-135)', '(-72)', '(-33)', '(-12)', '(-3)', '(0)', '(3)', '(12)', '(33)', '(72)', '(135)'],
      datasets: [
        {
          id: 1,
          data: data,
          backgroundColor: "#7c3aed",
          borderColor: "#7c3aed",
          borderWidth: 4,
          // fill: true,
          barThickness: "2.5"
        },
        {
          id: 1,
          data: Array(labels.length).fill(1),
          backgroundColor: "#1d2031",
          borderColor: "#1d2031",
          borderWidth: 4,
          // fill: true,
          barThickness: "2.5"
        },
      ],
    }}
    options={{
      scales: {
        x: {
          stacked: true,
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            font: {
              size: 9,
            },
            callback: function(value, idx, values) {
              if (parseFloat(data[idx])) {
                return value;
              }
              // return ((parseFloat(data[idx]) !== 0) ? value : "")
            },
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
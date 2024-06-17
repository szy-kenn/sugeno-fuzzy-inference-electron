import React from 'react';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

ChartJS.register(annotationPlugin);
const BarChart = () => {
  
  // const datasets = {
  //   labels: labels,
  //   datasets: datasets
  // };
  
  return (
    <Chart
    type='bar' 
    data={{
      labels: ['Jun', 'Jul', 'Aug'],
      datasets: [
        {
          id: 1,
          label: '',
          data: [5, 6, 7],
        },
        {
          id: 2,
          label: '',
          data: [3, 2, 1],
        },
      ],
    }}
    />
  )
}

export default BarChart
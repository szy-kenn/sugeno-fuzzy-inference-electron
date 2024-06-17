import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import React from 'react'

const ScatterChart = ({estimate, exact}) => {
  
    const dataset = {
        datasets: [
          {
            label: "Estimate",
            data: [estimate],
            backgroundColor: '#22d3ee',
          },
          {
            label: "Exact",
            data: [exact],
            backgroundColor: '#ef4444',
          }
        ],
      };

    return (
    <Chart
        type='scatter'
        data={dataset}
        options={{
            radius: 20,
            scales: {
                x: {
                    ticks: {
                        maxTicksLimit: 6
                    }
                },
            },
            plugins: {
                legend: {
                    display: false
                },
            }
        }}
    />
)
}

export default ScatterChart
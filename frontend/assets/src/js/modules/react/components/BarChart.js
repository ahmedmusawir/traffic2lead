import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const options = {
  scales: {
    y: [
      {
        ticks: { beginAtZero: true },
        fontColor: 'white',
      },
    ],
  },
  color: 'white',
  plugins: {
    legend: {
      labels: {
        color: 'black',
      },
    },
  },
};

const BarChart = ({ numberData, monthLabels }) => {
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Monthly Traffic',
        data: numberData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        fillColor: 'white',
      },
    ],
  };
  return (
    <div style={{ color: 'white' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

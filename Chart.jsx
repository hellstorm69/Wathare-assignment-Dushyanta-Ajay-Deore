import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  // Format data for chart
  const chartData = {
    labels: data.map(entry => entry.timestamp),
    datasets: [{
      data: data.map(entry => entry.sample),
      borderColor: data.map(entry => {
        if (entry.sample === 0) return 'yellow';
        if (entry.sample === 1) return 'green';
        return 'red';
      })
    }]
  };

  return (
    <div>
      <h2>Chart Visualization</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;

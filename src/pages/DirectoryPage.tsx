// SimpleLineChart.js
import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

const DirectoryPage = () => {
  return (
    // ResponsiveContainer makes the chart adapt to its parent's size.
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* CartesianGrid adds a grid to the background */}
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* XAxis defines the horizontal axis. dataKey is the key in your data for the x-axis labels. */}
        <XAxis dataKey="name" />
        
        {/* YAxis defines the vertical axis. */}
        <YAxis />
        
        {/* Tooltip shows data when you hover over a data point. */}
        <Tooltip />
        
        {/* Legend displays a key for the lines in the chart. */}
        <Legend />
        
        {/* Line component draws the actual line. dataKey points to the value to be plotted. */}
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DirectoryPage;
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Total Donation:', value: 12 },
  { name: 'Your Donation:', value: 3},
];

const COLORS = ['#FF444A', '#00C49F']; // Color codes for the pie chart slices

function PieChartExample() {
  return (
    <div className='w-full mx-auto' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({percent }) => `${(percent * 100).toFixed(2)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'black', marginRight: '10px' }}>Total Donation</div>
        <div style={{ width: '20px', height: '20px', backgroundColor: COLORS[0], marginRight: '10px' }}></div>
        <div style={{ color: 'black', marginRight: '10px' }}>Your Donation</div>
        <div style={{ width: '20px', height: '20px', backgroundColor: COLORS[1] }}></div>
      </div>
    </div>
  );
}

export default PieChartExample;

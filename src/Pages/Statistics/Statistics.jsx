import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const donationData = useLoaderData();
  const [donation, setDonation] = useState(0);

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donate")) || [];
    const donationItemsLength = donateItems.length;
    const donationPercentage = (donationItemsLength / donationData.length) * 100;
    setDonation(donationPercentage);
  }, [donationData]);

  const data = [
    { name: 'Total Donation', value: donationData.length },
    { name: 'Your Donation', value: donation },
  ];
console.log(donation);
  const COLORS = ['#FF444A', '#00C49F'];

  return (
    <div>
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
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
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
    </div>
  );
};

export default Statistics;
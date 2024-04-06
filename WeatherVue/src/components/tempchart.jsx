import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import axios from 'axios';

let dates = [];
let temperatures = [];
let data;
try {
    const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=ElMonte%2CCA&postal_code=91733&country=US&days=16&units=I&key=29636b0b1f3e4831be91ada4c58eb060');
    data = response.data.data;
    data.forEach(day => {
      dates.push(day.datetime);
      temperatures.push(day.temp);
    });

} catch (error) {
    console.error('Error fetching weather data:', error);
}

console.log(data)

const TemperatureChart = () => {
  const data = {
    labels: dates,
    datasets: [{
      label: 'Temperature (In °F)',
      data: temperatures,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'black',
        }
      },
      y: {
        ticks: {
          color: 'black' 
        },
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default TemperatureChart;

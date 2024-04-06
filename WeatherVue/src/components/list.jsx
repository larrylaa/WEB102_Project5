import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './list.css';
import { Link } from 'react-router-dom';

var maxWindSpeed = -Infinity;
var maxTemp = -Infinity;

function List() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortByTempLowToHigh, setSortByTempLowToHigh] = useState(false);
  const [sortByWindLowToHigh, setSortByWindLowToHigh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=ElMonte%2CCA&postal_code=91733&country=US&days=16&units=I&key=29636b0b1f3e4831be91ada4c58eb060');
        setWeatherData(response.data.data); 

        response.data.data.forEach(day => {
          if (day.wind_spd > maxWindSpeed) {
            maxWindSpeed = day.wind_spd;
          }
          if (day.temp > maxTemp) {
            maxTemp = day.temp;
          }
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sortedData = weatherData.slice();

    if (sortByTempLowToHigh) {
      sortedData.sort((a, b) => a.temp - b.temp);
    }

    if (sortByWindLowToHigh) {
      sortedData.sort((a, b) => a.wind_spd - b.wind_spd);
    }

    setFilteredData(sortedData.filter(day =>
      day.datetime.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm, weatherData, sortByTempLowToHigh, sortByWindLowToHigh]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortByTempLowToHigh = () => {
    setSortByTempLowToHigh(!sortByTempLowToHigh);
  };

  const handleSortByWindLowToHigh = () => {
    setSortByWindLowToHigh(!sortByWindLowToHigh);
  };

  return (
    <div>
      <div className="data-list">
        <div className="column">
          <div className="title">Date</div>
          {filteredData.map((day, index) => (
            <div key={index}>{day.datetime}</div>
          ))}
        </div>

        <div className="column">
          <div className="title">Temperature</div>
          {filteredData.map((day, index) => (
            <div key={index}>{day.temp}° F</div>
          ))}
        </div>

        <div className="column">
          <div className="title">Weather Condition</div>
          {filteredData.map((day, index) => (
            <div key={index}>{day.weather.description}</div>
          ))}
        </div>

        <div className="column">
          <div className="title">Wind Strength</div>
          {filteredData.map((day, index) => (
            <div key={index}>{day.wind_spd} m/s</div>
          ))}
        </div>

        <div className="column">
          <div className="title">Link</div>
          {filteredData.map((day, index) => (
          <div><Link key={index} to={`/info/${day.datetime}`}>🔗</Link></div>
          ))}
        </div>

        
      </div>

      <div className="buttons-container">
        <input
          type="text"
          placeholder="Search by date..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleSortByTempLowToHigh}>Temperature Filter </button>
        <button onClick={handleSortByWindLowToHigh}>Wind Strength Filter</button>
      </div>
    </div>
  );
}

export { List, maxWindSpeed, maxTemp };

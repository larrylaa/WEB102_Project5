import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './info.css'

const Info = () => {
    const { date } = useParams();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=ElMonte%2CCA&postal_code=91733&country=US&days=16&units=I&key=29636b0b1f3e4831be91ada4c58eb060');
                const data = response.data.data;
                const filteredData = data.find(day => day.datetime === date);
                setWeatherData(filteredData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [date]);

    return (
        <div className="info-container">
            {weatherData ? (
                <div>
                    <h2>{weatherData.datetime}</h2>
                    <p>Low Temp❄️: {weatherData.low_temp}°F</p>
                    <p>High Temp 🏜️: {weatherData.high_temp}°F</p>
                    <p>Chance Of Rain 🌧️: {weatherData.precip}%</p>
                    <p>Chance Of Snow 🌨️: {weatherData.snow}%</p>
                    <p>Cloud Coverage ☁️: {weatherData.clouds}%</p>
                    
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Info;

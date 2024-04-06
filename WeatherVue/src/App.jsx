import './App.css';
import Card from './components/card';
import Header from './components/header';
import { List, maxWindSpeed, maxTemp } from './components/list';
import Navbar from './components/navbar';
import TemperatureChart from './components/tempchart';
import Info from './components/info';
import { Route, Routes } from "react-router-dom"

const summarizedData = [
  {
    top: "El Monte",
    bottom: "El Monte, CA, USA",
  },
  {
    top: `50.8° F`,
    bottom: "Lowest Temperature ❄️"
  },
  {
    top: `73.7° F`,
    bottom: "Highest Temperature 🏜️"
  },
  {
    top: `12.1 mph`,
    bottom: "Highest Wind Speed 🍃"
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={(
          <>
            <div className="side-bar">
              <Header />
              <Navbar />
            </div>

            <div className="data-row">
              {summarizedData.map((data, index) => (
                <Card key={index} top={data.top} bottom={data.bottom} />
              ))}
            </div>

            <div>
              <List />
            </div>

            <div className="tempChart">
              <TemperatureChart />
            </div>
          </>
        )} />

        <Route path="/about" element={(
          <>
            <div className="side-bar">
              <Header />
              <Navbar />
            </div>

            <div className='summary'>
            
            <p className='text'>Welcome to Weathervue, your comprehensive weather dashboard powered by the Weatherbit API. At Weathervue, we offer a robust platform designed to provide you with detailed insights into current and forecasted weather conditions worldwide. With Weathervue, you can access instant weather updates for any location, allowing you to stay informed about current conditions at a glance. Whether you're planning a trip, organizing outdoor activities, or simply staying up-to-date with the weather in your area, Weathervue has you covered. Our platform not only offers real-time weather data but also provides valuable forecasting trends, allowing you to anticipate weather patterns in the coming days. By analyzing historical data, you can gain insights into weather trends over time, enabling you to make more informed decisions. Searching for specific weather information is made easy with Weathervue's intuitive search and filter options. Whether you're interested in temperature, precipitation, wind speed, or any other weather metric, you can quickly find the data you need to plan your activities accordingly. Visualizing weather patterns is effortless with Weathervue's interactive maps. Our dynamic maps allow you to track storms, observe temperature gradients, and explore various weather phenomena, providing a visually engaging way to understand weather patterns. Additionally, Weathervue offers customizable preferences, allowing you to tailor the dashboard to suit your needs. Whether you prefer metric or imperial units, want to set favorite locations, or adjust display options, you can personalize your Weathervue experience. With its comprehensive features and user-friendly interface, Weathervue is your go-to destination for all things weather-related. Explore weather insights seamlessly with Weathervue!</p>
            </div>
          </>
        )} />

      <Route path="/info/:date" element={(
          <>
            <div className="side-bar">
              <Header />
              <Navbar />
            </div>

            <Info></Info>
          </>
        )} />
      </Routes>
    </div>
  );
}

export default App;

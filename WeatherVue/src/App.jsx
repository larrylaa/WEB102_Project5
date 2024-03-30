import './App.css';

import Card from './components/card';
import Header from './components/header';
import { List, maxWindSpeed, maxTemp } from './components/list';
import Navbar from './components/navbar';

const summarizedData = [
  {
    top: "El Monte",
    bottom: "El Monte, CA, USA",
  },
  {
    top: `81.4° F`,
    bottom: "Highest Temperature 🌡️"
  },
  {
    top: `12.3 mph`, 
    bottom: "Highest Wind Speed 🍃"
  },
];


function App() {
  return (
    <>
      <div className="side-bar">
        <Header></Header>
        <Navbar></Navbar>
      </div>

      <div className="data-row">
        {summarizedData.map((data, index) => (
          <Card key={index} top={data.top} bottom={data.bottom} />
        ))}
      </div>

      <div>
        <List></List>
      </div>
    </>
  )
}

export default App;

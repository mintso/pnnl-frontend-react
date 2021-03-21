import './App.css';
import React from 'react';
import HeatMap from './HeatMap'
import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import GrafanaChannel from './GrafanaChannel'

function App(): React.Component {
  console.log('Hello');
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <p >SEB Building</p>
        </header>
      </div>
      <div>
        <CalendarTable />
      </div>
      <div>
        <GrafanaChannel />
      </div>
      <div>
        <HeatMap title={"Heat Map of ZoneTemperature"} labels={["Summer Occurrence", "Controlled Summer", "Controlled Winter", "Override Release"]} />
      </div>
      <div>
        <HeatMap title={"Heat Map of ZoneAirflow"} labels={["Normal Operation", "Hunting", "Constant", "Override"]} />
      </div>
    </div>
  );
}

export default App;
import './App.css';
import React, { useState } from 'react';
import { Component } from 'react';
import Select from 'react-select';
import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import HeatMap from './HeatMap'
import StackedChart from './StackedChart'
import GrafanaChannel from './GrafanaChannel'
import DataAdaptor from './DataAdaptor'

const Views = [
  { label: "Pie Chart", value: <CalendarTable /> },
  { label: "Stacked Bar", value: <StackedChart /> },
  { label: "Heat Map", value: <HeatMap title={"Heat Map of ZoneTemperature"} labels={["Summer Occurrence", "Controlled Summer", "Controlled Winter", "Override Release"]} /> } /*temp place holder */
];


function App(): React.Component {

  const [selectedView, setView] = useState("");

  const handleChange = (event) => {
      setView(event.value);
  };
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <p >SEB Building</p>
        </header>
      </div>
      <div style={{width: '200px'}}>
        <Select placeholder="Select View"
          options={Views}
          onChange={handleChange} />
      </div>
      <div>
	      <p> {selectedView} </p>
      </div>
        <div>
            <iframe
                src="https://ec2-3-140-252-185.us-east-2.compute.amazonaws.com:3000/d/pSc0RlYMzd/pnnl-seb-influx?orgId=1"
                width="100%" height="700px"></iframe>
        </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { Component } from 'react';
import Select from 'react-select';
import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import GrafanaChannel from './GrafanaChannel'

const Views = [
  { label: "Pie Chart", value: <CalendarTable /> },
  { label: "Stacked Bar", value: "<StackedBar />" },
  { label: "Heat Map", value: "<HeatMap />" },
  { label: "Grafana", value: <GrafanaChannel /> }
];


function App(): React.Component {
  console.log('Hello');

  const [selectedView, setView] = useState("");

  const handleChange = (event) => {
      console.log(event.value);
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
	<p> {selectedView} </p>
      <div>
      </div>
      <div>
        <CalendarTable />
      </div>
      <div>
        <GrafanaChannel />
      </div>
    </div>
  );
}

export default App;

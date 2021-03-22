import './App.css';
import React, { useState } from 'react';
import { Component } from 'react';
import Select from 'react-select';
import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import HeatMap from './HeatMap'
import StackedBar from './StackedChart'
import GrafanaChannel from './GrafanaChannel'

const Views = [
  { label: "Pie Chart", value: <CalendarTable /> }, /*Calendar view should only be for PieChart */
  { label: "Stacked Bar", value: <StackedBar /> }, /* Place holder */
  { label: "Heat Map", value: <HeatMap /> } /* Place holder */
];


function App(): React.Component {
  console.log('Hello');

  const [selectedView, setView] = useState("");

  const handleChange = (event) => {
     /* console.log(event.value); */
      setView(event.value);
  };
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
        <p >SEB Building</p>
        </header>
      </div>
      <div style={{width: '200px', zIndex:99999}}>
	<Select placeholder="Select View"
		options={Views}
		onChange={handleChange} />
      </div>
      <div>
	<p> {selectedView} </p>
      </div>
      <div>
	<GrafanaChannel /	>
      </div>
    </div>
  );
}

export default App;

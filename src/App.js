import './App.css';
import React from 'react';
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
    </div>
  );
}

export default App;

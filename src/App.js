import './App.css';
import React from 'react';
import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import GrafanaChannel from './GrafanaChannel'
import moment from 'moment';

function App(): React.Component {
  const date = moment(new Date()).format('YYYY-MM-DD');
  const link = 'www.google.com';
  
  console.log(date);
  
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

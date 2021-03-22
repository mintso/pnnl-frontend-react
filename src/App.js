import './App.css';
import React from 'react';
import PieChart from './PieChart'
import CalendarTable from './CalendarTable'
import GrafanaChannel from './GrafanaChannel'
import StackedChart from "./StackedChart";

function App(): React.Component {
    console.log('Hello');

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <p>SEB Building</p>
                </header>
            </div>
            <div>
                <iframe
                    src="https://ec2-3-140-252-185.us-east-2.compute.amazonaws.com:3000/d/pSc0RlYMzd/pnnl-seb-influx?orgId=1"
                    width="100%" height="700px"></iframe>
            </div>
            <div>
                <CalendarTable/>
            </div>
            <div>
                <StackedChart/>
            </div>
            <div>
                <GrafanaChannel/>
            </div>
        </div>
    );
}

export default App;

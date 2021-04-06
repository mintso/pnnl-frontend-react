import './App.css';
import React, {useState} from 'react';
import Select from 'react-select';
import CalendarTable from './CalendarTable';
import AirflowStackedChart from './AirflowStackedChart'
import TemperatureStackedChart from "./TemperatureStackedChart";
import CalendarTableContainer from './CalendarTableContainer';
import StackChartContainer from './StackChartContainer';
import HeatMapContainer from './HeatMapContainer';

const Views = [
  { label: "Pie Chart", value: <CalendarTableContainer /> },
  { label: "Stacked Bar", value: <StackChartContainer /> },
  { label: "Heat Map", value: <HeatMapContainer />}
];


function App(): React.Component {

  const [selectedView, setView] = useState(<CalendarTableContainer />);

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
      <div className ="margins">
	 <p className = "heading">Views</p>
      	 <div style={{width: '200px'}}>
            <Select
              defaultValue = {{ label: "Pie Chart", value: <CalendarTableContainer /> }}
              options={Views}
              onChange={handleChange} />
         </div>
	 <p> {selectedView} </p>
      </div>
	<p></p>
      <div className ="margins">
	 <p className = "heading">Grafana Panels</p>
          <iframe
              src="https://ec2-3-140-252-185.us-east-2.compute.amazonaws.com:3000/d/pSc0RlYMzd/pnnl-seb-influx?orgId=1"
              width="100%" height="700px"></iframe>
      </div>
    </div>
  );
}

export default App;

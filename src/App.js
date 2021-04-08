import './App.css';
import React, {useState} from 'react';
import Select from 'react-select';
import CalendarTable from './CalendarTable';
import CalendarTableContainer from './CalendarTableContainer';
import StackChartContainer from './StackChartContainer';
import HeatMapContainer from './HeatMapContainer';
import HuntingService from './HuntingSerivce';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/hunting">Alerts</Link>
                  </li>
              </ul>

              <hr />

              <Switch>
                  <Route exact path="/">
                      <div>
                          <div className="App">
                              <header className="App-header">
                                  <p >SEB Building</p>
                              </header>
                          </div>
                          <div style={{width: '200px'}}>
                              <Select placeholder="Select View"
                                      defaultValue = {{ label: "Pie Chart", value: <CalendarTableContainer /> }}
                                      options={Views}
                                      defaultValue = {{ label: "Pie Chart", value: <CalendarTable /> }}
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
                  </Route>
                  <Route path="/hunting">
                      <HuntingService />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;

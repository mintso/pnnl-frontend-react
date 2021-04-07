import './App.css';
import React, {useState} from 'react';
import Select from 'react-select';
import CalendarTable from './CalendarTable';
import CalendarTableContainer from './CalendarTableContainer';
import StackChartContainer from './StackChartContainer';
import HeatMapContainer from './HeatMapContainer';

const Views = [
    { label: "Pie Chart", value: <CalendarTableContainer /> },
    { label: "Stacked Bar", value: <StackChartContainer /> },
    { label: "Heat Map", value: <HeatMapContainer />}
];


export default function HuntingService(): React.Component {

    const [selectedView, setView] = useState(<CalendarTableContainer />);

    const handleChange = (event) => {
        setView(event.value);
    };

    return (
        <div>
          <h1>Hunting!</h1>
        </div>
    );
}

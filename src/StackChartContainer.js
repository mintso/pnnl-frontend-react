import AirflowStackedChart from './AirflowStackedChart'
import TemperatureStackedChart from "./TemperatureStackedChart";

export default function StackChartContainer() {
    return (
        <div className = "border">
	    <p className = "title">Zone Temperature</p>
            <TemperatureStackedChart />
	    <p style={{borderTop:"1px solid black"}} className = "title"><br/>Zone Airflow</p>
            <AirflowStackedChart />
        </div>
    );
}

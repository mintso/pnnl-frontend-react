import AirflowStackedChart from './AirflowStackedChart'
import TemperatureStackedChart from "./TemperatureStackedChart";

export default function StackChartContainer() {
    return (
        <div className = "border">
            <AirflowStackedChart />
	    <p style={{borderTop:"1px solid black"}}></p>
            <TemperatureStackedChart />
        </div>
    );
}

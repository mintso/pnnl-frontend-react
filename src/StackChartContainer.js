import AirflowStackedChart from './AirflowStackedChart'
import TemperatureStackedChart from "./TemperatureStackedChart";

export default function StackChartContainer() {
    return (
        <div>
            <AirflowStackedChart />
            <TemperatureStackedChart />
        </div>
    );
}
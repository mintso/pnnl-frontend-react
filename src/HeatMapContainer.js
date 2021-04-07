import HeatMap from './HeatMap'

export default function HeatMapContainer() {
    return (
        <div>
            <HeatMap title={"Zone Temperature"} labels={["Controlled Summer", "Controlled Winter", "Override Release", "Summer Occurrence"]} type="temperature" />
            
            <HeatMap title={"AirFlow"} labels={["Constant", "Hunting", "Normal Operation", "Override"]} type="airflow" />
        </div>
    )
}
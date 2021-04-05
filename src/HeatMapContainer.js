import HeatMap from './HeatMap'

export default function HeatMapContainer() {
    return (
        <div>
            <p>Temperature</p>
            <HeatMap title={"Heat Map of Zone Temperature"} labels={["Controlled Summer", "Controlled Winter", "Override Release", "Summer Occurrence"]} type="temperature" />
            <p>Airflow</p>
            <HeatMap title={"Heat Map of Zone Air Flow"} labels={["Constant", "Hunting", "Normal Operation", "Override"]} type="airflow" />
        </div>
    )
}
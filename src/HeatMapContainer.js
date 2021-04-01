import HeatMap2 from './HeatMap2'

export default function HeatMapContainer() {
    return (
        <div>
            <p>Temperature</p>
            <HeatMap2 title={"Heat Map of Zone Temperature"} labels={["Controlled Summer", "Controlled Winter", "Override Release", "Summer Occurrence"]} type="temperature" />
            <p>Airflow</p>
            <HeatMap2 title={"Heat Map of Zone Air Flow"} labels={["Constant", "Hunting", "Normal Operation", "Override"]} type="airflow" />
        </div>
    )
}
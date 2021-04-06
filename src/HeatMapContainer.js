import HeatMap from './HeatMap'

export default function HeatMapContainer() {
    return (
        <div className = "border">
            <p className = "title">Temperature</p>
            <HeatMap labels={["Controlled Summer", "Controlled Winter", "Override Release", "Summer Occurrence"]} type="temperature" />
	    <p style={{borderTop:"1px solid black"}}></p>
            <p className = "title">Airflow</p>
            <HeatMap labels={["Constant", "Hunting", "Normal Operation", "Override"]} type="airflow" />
        </div>
    )
}

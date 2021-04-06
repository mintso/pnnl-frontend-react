import CalendarTable from './CalendarTable'

export default function CalendarTableContainer() {
    return (
        <div className = "border">
            <p className = "title">Temperature</p>
            <CalendarTable type = 'temperature' />
	    <p style={{borderTop:"1px solid black"}}></p>
            <p className = "title">Airflow</p>
            <CalendarTable type = 'airflow' />
        </div>
    )
}

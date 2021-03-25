import CalendarTable from './CalendarTable'

export default function CalendarTableContainer() {
    return (
        <div>
            <p>Temperature</p>
            <CalendarTable type = 'temperature' />
            <p>Airflow</p>
            <CalendarTable type = 'airflow' />
        </div>
    )
}
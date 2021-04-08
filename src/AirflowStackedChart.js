import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import DataAdaptor from "./DataAdaptor";

const options = {
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
            },
        ],
    },
}


export default function AirflowStackedChart() {
    const [airFlowDataObject, setAirFlowDataObject] = useState({});
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - (6 * 24 * 60 * 60 * 1000));

    useEffect(() => {
        getData();
    }, []);


    const getData = async() => {
        let res = await DataAdaptor('airflow', pastDate, currentDate);
        setAirFlowDataObject(res);
    }

    const airflowDateArray = [];
    const normalOperationArray = [];
    const huntingArray = [];
    const constantArray = [];
    const overrideArray = [];
    for (const key in airFlowDataObject) {
        airflowDateArray.push(key);
        for(const key2 in airFlowDataObject[key]) {
            if(key2 === 'Normal Operation') {
                normalOperationArray.push(airFlowDataObject[key][key2]);
            } else if(key2 === 'Hunting') {
                huntingArray.push(airFlowDataObject[key][key2]);
            } else if(key2 === 'Constant') {
                constantArray.push(airFlowDataObject[key][key2]);
            } else if(key2 === 'Override') {
                overrideArray.push(airFlowDataObject[key][key2]);
            }
        }
    }

    const airFlowData = {
        labels: airflowDateArray,
        datasets: [
            {
                label: 'Normal Operation',
                data: normalOperationArray,
                backgroundColor: 'rgb(246, 193, 66)',
            },
            {
                label: 'Hunting',
                data: huntingArray,
                backgroundColor: 'rgb(77, 115, 190)',
            },
            {
                label: 'Constant',
                data: constantArray,
                backgroundColor: 'rgb(223, 130, 68)',
            },
            {
                label: 'Override',
                data: overrideArray,
                backgroundColor: 'rgb(165, 165, 165)',
            },
        ],
    }


    return (
        <>
            <div style={{margin: '10px', display: 'flex', justifyContent: 'start', maxWidth: 800}}>
                <Bar data={airFlowData} options={options}/>
            </div>
        </>
    );
};



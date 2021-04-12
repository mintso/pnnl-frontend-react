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


export default function TemperatureStackedChart() {
    const [tempDataObject, setTempDataObject] = useState({});
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - (6 * 24 * 60 * 60 * 1000));

    useEffect(() => {
        getData();
    }, []);


    const getData = async() => {
        let res = await DataAdaptor('temperature', pastDate, currentDate);
        setTempDataObject(res);
    }
    const tempDateArray = [];
    const summerOccurrenceArray = [];
    const controlledWinterArray = [];
    const controlledSummerArray = [];
    const overrideReleaseArray = [];
    for (const key in tempDataObject) {
        tempDateArray.push(key);
        for(const key2 in tempDataObject[key]) {
            if(key2 === 'Summer Occurrence') {
                tempDataObject[key][key2] < 0? summerOccurrenceArray.push(0): summerOccurrenceArray.push(tempDataObject[key][key2]);
            } else if(key2 === 'Controlled Winter') {
                tempDataObject[key][key2] < 0? controlledWinterArray.push(0): controlledWinterArray.push(tempDataObject[key][key2]);
            } else if(key2 === 'Controlled Summer') {
                tempDataObject[key][key2] < 0? controlledSummerArray.push(0): controlledSummerArray.push(tempDataObject[key][key2]);
            } else if(key2 === 'Override Release') {
                tempDataObject[key][key2] < 0? overrideReleaseArray.push(0): overrideReleaseArray.push(tempDataObject[key][key2]);
            }
        }
    }

    const temperatureData = {
        labels: tempDateArray,
        datasets: [
            {
                label: 'Summer Occurrence',
                data: summerOccurrenceArray,
                backgroundColor: 'rgb(246, 193, 66)',
            },
            {
                label: 'Controlled Winter',
                data: controlledWinterArray,
                backgroundColor: 'rgb(77, 115, 190)',
            },
            {
                label: 'Controlled Summer',
                data: controlledSummerArray,
                backgroundColor: 'rgb(223, 130, 68)',
            },
            {
                label: 'Override Release',
                data: overrideReleaseArray,
                backgroundColor: 'rgb(165, 165, 165)',
            },
        ],
    }


    return (
        <>
            <div style={{margin: '10px', display: 'flex', justifyContent: 'start', maxWidth: 800}}>
                <Bar data={temperatureData} options={options}/>
            </div>
        </>
    );
};



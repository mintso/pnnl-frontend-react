import React from 'react';
import {Bar} from 'react-chartjs-2';

const temperatureData = {
    labels: ['3/20/21', '3/21/21', '3/22/21', '3/23/21', '3/24/21', '3/25/21', '3/26/21'],
    datasets: [
        {
            label: 'Summer Occurrence',
            data: [10, 25, 25, 25, 25, 25, 25, 0],
            backgroundColor: 'rgb(246, 193, 66)',
        },
        {
            label: 'Controlled Winter',
            data: [0, 0, 0, 0, 0, 0, 0, 20],
            backgroundColor: 'rgb(77, 115, 190)',
        },
        {
            label: 'Controlled Summer',
            data: [40, 25, 25, 25, 25, 25, 0, 0],
            backgroundColor: 'rgb(223, 130, 68)',
        },
        {
            label: 'Override Release',
            data: [0, 0, 0, 0, 0, 0, 25, 30],
            backgroundColor: 'rgb(165, 165, 165)',
        },
    ],
}

const airFlowData = {
    labels: ['3/20/21', '3/21/21', '3/22/21', '3/23/21', '3/24/21', '3/25/21', '3/26/21'],
    datasets: [
        {
            label: 'Normal Operation',
            data: [10, 25, 25, 25, 25, 25, 25, 0],
            backgroundColor: 'rgb(246, 193, 66)',
        },
        {
            label: 'Hunting',
            data: [0, 0, 0, 0, 0, 0, 0, 20],
            backgroundColor: 'rgb(77, 115, 190)',
        },
        {
            label: 'Constant',
            data: [40, 25, 25, 25, 25, 25, 0, 0],
            backgroundColor: 'rgb(223, 130, 68)',
        },
        {
            label: 'Override',
            data: [0, 0, 0, 0, 0, 0, 25, 30],
            backgroundColor: 'rgb(165, 165, 165)',
        },
    ],
}


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


export default function StackedChart() {

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'start', maxWidth: 800}}>
                <div className='header'>
                    <h3 className='title'>Zone Temperature</h3>
                </div>
                <Bar data={temperatureData} options={options}/>
                <div className='header'>
                    <h3 className='title'>Zone AirFlow</h3>
                </div>
                <Bar data={airFlowData} options={options}/>
            </div>
        </>
    );
};



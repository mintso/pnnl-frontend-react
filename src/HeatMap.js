import React, { useState, useEffect } from 'react';
import DataAdaptor from './DataAdaptor';
import ReactApexChart from "react-apexcharts";
import { Date, Promise } from "globalthis/implementation";
import GetHeatMapMonth from './GetHeatMapMonth';
import moment from 'moment';
import GetStartDate from './GetStartDate';

export default function HeatMap(props) {

    const END_DATE = moment().subtract(1, 'days').toDate();
    let START_DATE = new Date();
    let LABELS_IDX = {};

    // Beginning state for data and options for heatmap 
    const [state, setState] = useState({series: [
        {
            name: '',
            data: []
        },
        {
            name: '',
            data: []
        },
        {
            name: '',
            data: []
        },
        {
            name: '',
            data: []
        },
        ],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
                toolbar: {
                    show: false
                  }
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: true,
                    colorScale: {
                        // TODO: this needs to be dynamic
                        ranges: [
                            {
                                from: -1,
                                to: -1,
                                name: 'Unavailable',
                                color: '#DEDEDE'
                            },
                            {
                                from: 0,
                                to: 0,
                                name: props.labels[0],
                                color: '#FFCF9C'
                            },
                            {
                                from: 1,
                                to: 1,
                                name: props.labels[1],
                                color: '#A4D4B4'
                            },
                            {
                                from: 2,
                                to: 2,
                                name: props.labels[2],
                                color: '#3B1C32'
                            },
                            {
                                from: 3,
                                to: 3,
                                name: props.labels[3],
                                color: '#CA054D'
                            }
                        ]
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1
            },
            title: {
                text: props.title
            },
        },
    })

    // changes to heatmap start here
    useEffect (() => {
        createLabelIdx(); // map labels to index
        getData();
    }, []);
  
   // Get data by getting Sunday 4 weeks ago, retrieve data, store in series format, update state
    const getData = () => {
        const p = new Promise((resolve, reject)=>{
            resolve(START_DATE.setTime(GetStartDate()));
        })
        .then(() => { return DataAdaptor(props.type, START_DATE, END_DATE); })
        .then((res) => {
            // creates 4 weeks of data based on identifying the label with largest frequency
            // data not available is returned as a string '-1'
            return GetHeatMapMonth(res, LABELS_IDX);
        })
        .then((newSeries) => {
            setState((prevState) => {
                return { ...prevState, series: newSeries }
            })
        })  
    }

    // map prediction labels to a number
    const createLabelIdx = () => {
        // A label with "-1" means that there is no data for that day
        LABELS_IDX['-1'] = -1;
        for (let i=0; i<props.labels.length; i++) {
            LABELS_IDX[props.labels[i]] = i;
        }
    }

    return (
        <div id="chart">
		<ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
	  	</div>
    )
}

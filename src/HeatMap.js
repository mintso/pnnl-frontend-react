import React, { useState, useEffect } from 'react';
import DataAdaptor from './DataAdaptor';
import ReactApexChart from "react-apexcharts";
import { console, Date, Promise } from "globalthis/implementation";

export default function HeatMap(props) {

    const DAYS = 27 // used to help pick the soonest sunday 27 DAYS before current date
    const DAYS_PER_WEEK = 7;
    const END_DATE = new Date();
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
            resolve(getStartDate(findNextSunday));
        }).then(() => { return DataAdaptor(props.type, START_DATE, END_DATE); })
        .then((res) => {
            return createSeries(res);
        }).then((newSeries) => {
            console.log(newSeries);
            setState((prevState) => {
                return { ...prevState, series: newSeries }
            })
        })  
    }

    // creates 4 weeks of data based on identifying the label with largest frequency
    // data not available is returned as a string '-1'
    const createSeries = ((data) =>{
        const NUM_WEEKS = 4;
        let series = []
        const xLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let k = 0;
        const data_keys = Object.keys(data);
        const data_values = Object.values(data);
        
        for (let i=0; i<NUM_WEEKS; i++) {
            let newRow = []
            let newName = '';
            
            for (let j=0; j<DAYS_PER_WEEK; j++) {
                // create dates on y axis
                if (j === 0) {
                    const dateEnd = new Date(new Date(data_keys[k]).getTime() + calculatedDays(7))
                    newName = data_keys[k] + ' to ' + dateEnd.getFullYear() + '-' + formatMonth(dateEnd) + '-' + formatDate(dateEnd);
                }
                const labels = data_values[k]
                newRow.push({
                    x: xLabel[j],
                    y: findMax(labels)
                });
                // increment one to iterate through all data values
                k++;
            }
            series.push(
                {
                    name: newName,
                    data: newRow
                });
            
        }
        console.log(series);
        return series.reverse();
    });

    // if a label exists, find the most frequent label
    const findMax = (labels) => {
        let maxLabel = ['-1',-1]
        if (labels) {
            for (const key in labels) {
                if (parseInt(labels[key]) > maxLabel[1]) {
                    maxLabel = [key, labels[key]]
                }
            }
            return LABELS_IDX[maxLabel[0]];
        // return '-1' as a label if there is no data    
        } else {
            return LABELS_IDX['-1'];
        }
    }

    // format date to have 0 in front if single digit
    const formatDate = (date) => { return ("0" + date.getDate()).slice(-2) }
    // format month to have 0 in front if single digit
    const formatMonth = (date) => { return ("0" + (date.getMonth() + 1)).slice(-2) }

    // map prediction labels to a number
    const createLabelIdx = () => {
        // A label with "-1" means that there is no data for that day
        LABELS_IDX['-1'] = -1;
        for (let i=0; i<props.labels.length; i++) {
            LABELS_IDX[props.labels[i]] = i;
        }
    }

   // Get start date by getting first Sunday 4 weeks ago 
   const getStartDate = (callback) =>{
        START_DATE.setTime(END_DATE.getTime() - calculatedDays(DAYS));
        // callback is findNextSunday
        callback();
   }

   // Revise StartDate until it reaches the Sunday After
   const findNextSunday = () =>{
        const SUNDAY = 0;
        while (START_DATE < END_DATE) {
            if (START_DATE.getDay() === SUNDAY) {
                break;
            }
            // set start day one day forward
            START_DATE.setTime(START_DATE.getTime() + calculatedDays(1));
        }
    }; 

    // Helps calculate the worth of  "numDays" days based on time 
    const calculatedDays = (numDays) => {
        return numDays * 24 * 60 * 60 * 1000;
    }

    return (
        <div id="chart">
		<ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
	  	</div>
    )
}

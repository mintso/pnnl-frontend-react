import React, { useState, useEffect } from 'react';
import DataAdaptor from './DataAdaptor';
import ReactApexChart from "react-apexcharts";
import { console, Date, Promise } from "globalthis/implementation";
import { max } from 'moment';

export default function HeatMap2(props) {

    const DAYS = 27
    const END_DATE = new Date();
    let START_DATE = new Date();
    let LABELS_IDX = {};
    

    const [state, setState] = useState({series: [{
        name: '',
        data: [{x: 'default', y: 1}]
    },
    {
        name: '',
        data: [{x: 'default', y: 2}]
    },
    {
        name: '',
        data: [{x: 'default', y: 3}]
    },
    {
        name: '',
        data: [{x: 'default', y: 4}]
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
            enabled: true
        },
        stroke: {
            width: 1
        },
        title: {
            text: props.title
        },
    },
})

    useEffect (() => {
        createLabelIdx();
        getData();

    }, []);

   const findNextSunday = () =>{
        const SUNDAY = 0;
        while (START_DATE < END_DATE) {
            if (START_DATE.getDay() === SUNDAY) {
                break;
            }
            START_DATE.setTime(START_DATE.getTime() + (1 * 24 * 60 * 60 * 1000));
        }
   }; 

   const getStartDate = (callback) =>{
    START_DATE.setTime(END_DATE.getTime() - (DAYS * 24 * 60 * 60 * 1000));
    callback();
   }
  
   // Get data by getting Sunday 4 weeks ago
    const getData = () => {
        const p = new Promise((resolve, reject)=>{
            resolve(getStartDate(findNextSunday));
        }).then(() => { return DataAdaptor(props.type, START_DATE, END_DATE);})
        .then((res) => {
            return createSeries(res);
        }).then((newSeries) => {
            console.log(newSeries);
            setState((prevState) => {
                
                return {...prevState, series: newSeries}
            
        })
    })
            //console.log(res)});
            //console.log(res);
        
        
}

    const createSeries = ((data) =>{
        const NUM_WEEKS = 4;
        let series = []
        const xLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let k = 0;
        const array = Object.values(data);
        console.log(array);
        for (let i=0; i<NUM_WEEKS; i++) {
            let newRow = []
            for (let j=0; j<7 ;j++) {
                const labels = array[k]
                newRow.push({
                    x: xLabel[j],
                    y: findMax(labels)
                });
                k++;
            }
            series.push(
                {
                    name: '',
                    data: newRow
                });
            
        }
        console.log(series);
        return series;
    });

    const findMax = (labels) => {
        let maxLabel = ['-1',-1]
        if (labels) {
            for (const key in labels) {
                if (parseInt(labels[key]) > maxLabel[1]){
                    maxLabel = [key, labels[key]]
                }
                //console.log(`${key}: ${labels[key]}`);
            }
            return LABELS_IDX[maxLabel[0]];
        } else {
            console.log("No data");
            return LABELS_IDX['-1'];
        }
        
       
    }
    

    const generateData = ((count, ymin) =>{
		var i = 0;
		var series = [];
		var xLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		var yCounter = ymin
		while (i < count) {
		  var x = xLabel[i];
		  var y = yCounter;
		  series.push({
			x: x,
			y: y
		  });
		  i++;
		  yCounter++;
		}
		return series;
	});

    // map labels to a number
    const createLabelIdx = () => {
        LABELS_IDX['-1'] = -1;
        for (let i=0; i<props.labels.length;i++) {
            LABELS_IDX[props.labels[i]] = i;
        }
        //console.log('LABEL IDX: ' + Object.values(LABELS_IDX));
        
    }

    return (
        <div id="chart">
		<ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
	  	</div>
    )
}


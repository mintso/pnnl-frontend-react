import React, { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

export default function HeatMap2(props) {

    const END_DATE = new Date();
    const START_DATE = new Date(END_DATE - 34);

    const [state, setState] = useState({series: [{}],options:{}})

    useEffect(() => {
        getData();
        getWeekStartEnd(START_DATE,END_DATE)
    }, []);

   
  
    const getData = async () => {
    //   let res = await DataAdaptor(props.type, START_DATE, END_DATE);
    //   setDatas(res);
        setState({series: [{
                name: '',
                data: generateData(7, 22)
            },
            {
                name: '',
                data: generateData(7, 15)
            },
            {
                name: '',
                data: generateData(7, 8)
            },
            {
                name: '',
                data: generateData(7, 1)
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
                            ranges: [{
                                from: 1,
                                to: 5,
                                name: props.labels[0],
                                color: '#00A100'
                            },
                            {
                                from: 6,
                                to: 12,
                                name: props.labels[1],
                                color: '#128FD9'
                            },
                            {
                                from: 13,
                                to: 26,
                                name: props.labels[2],
                                color: '#FFB200'
                            },
                            {
                                from: 27,
                                to: 28,
                                name: props.labels[3],
                                color: '#FF0000'
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

    const getWeekStartEnd = ((startDate, endDate) => {
		var diff = (endDate.getTime()-startDate.getTime())/(24*3600*1000);
		var A = [];
		var start = 1;
		var end = 7;
		while (diff > 7) {
			A.push(start);
			A.push(end);
			end += 7;
			start += 7;
			diff -= 7;
		}
		if (diff > 0) {
			A.push(start);
			A.push(endDate.getDate());
		}
		while (A.length < 8) {
			A.push(-1);
		}
        console.log(A)
		return A;
	});

    const getSundayFourWeeksAgo = () => {

    }
        


    return (
        <div id="chart">
		<ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
	  	</div>
    )
}


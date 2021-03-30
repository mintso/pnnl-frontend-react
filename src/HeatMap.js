import React from "react";
import DataAdaptor from './DataAdaptor';
import ReactApexChart from "react-apexcharts";
import { console, Date } from "globalthis/implementation";

class HeatMap extends React.Component {
	
	constructor(props) {
	  super(props);
  
	  const END_DATE = new Date();
	  const MONTH = END_DATE.getMonth() + 1;
	  const YEAR = END_DATE.getFullYear();
	  const START_DATE = new Date(YEAR, MONTH - 1, 1);
	  var arr = this.getWeekStartEnd(START_DATE, END_DATE);
	  this.state = {      
		series: [{
			name: MONTH + '/' + arr[0] + '/' + YEAR + '-' + MONTH + '/' + arr[1] + '/' + YEAR,
			data: this.generateData(props.type, arr[0], arr[1])
		  },
		  {
			name: MONTH + '/' + arr[2] + '/' + YEAR + '-' + MONTH + '/' + arr[3] + '/' + YEAR,
			data: this.generateData(props.type, arr[2], arr[3])
		  },
		  {
			name: MONTH + '/' + arr[4] + '/' + YEAR + '-' + MONTH + '/' + arr[5] + '/' + YEAR,
			data: this.generateData(props.type, arr[4], arr[5])
		  },
		  {
			name: MONTH + '/' + arr[6] + '/' + YEAR + '-' + MONTH + '/' + arr[7] + '/' + YEAR,
			data: this.generateData(props.type, arr[6], arr[7])
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
					from: 1,
					to: 1,
					name: props.labels[0],
					color: '#FFCF9C'
				  },
				  {
					from: 2,
					to: 2,
					name: props.labels[1],
					color: '#A4D4B4'
				  },
				  {
					from: 3,
					to: 3,
					name: props.labels[2],
					color: '#3B1C32'
				  },
				  {
					from: 4,
					to: 4,
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
	  };
	}
  
	generateData(dataType, startDate, endDate) {
		var series = [];
		var xLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		
		if (startDate !== -1) {
			var s = new Date();
			s.setDate(startDate);
			var e = new Date();
			e.setDate(endDate);
			DataAdaptor(dataType, s, e)
			.then((data) => {
				var array = Object.values(data);
				for (var i = 0; i < array.length; i++) {
					var x = xLabel[i];
					series.push({
						x: x,
						y: this.getMax(array[i])
					})
				}
				console.log(series);
			});
		} 
		return series;
	}

	getWeekStartEnd(startDate, endDate) {
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
		return A;
	}

	getMax(data) {
		var max = 0;
		var array = Object.values(data);
		for (var i = 0; i < array.length; i++) {
			if (parseInt(array[i]) > parseInt(array[max])) {
				max = i;
			}
		}
		return max + 1;
	}
  
	render() {
	  return (
		<div id="chart">
		<ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
	  	</div> 
	  );
	}
  }
  
export default HeatMap;

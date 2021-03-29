import React from "react";
import DataAdaptor from './DataAdaptor';
import ReactApexChart from "react-apexcharts";
import { Array, console, Date } from "globalthis/implementation";

class HeatMap extends React.Component {
	constructor(props) {
	  super(props);
  
	  const END_DATE = new Date();
	  const START_DATE = new Date(END_DATE.getFullYear(), END_DATE.getMonth(), 1);
	  var arr = this.getWeekStartEnd(START_DATE, END_DATE);
	  this.state = {      
		series: [{
			name: '',
			data: this.generateData(props.type, arr[0], arr[1])
		  },
		  {
			name: '',
			data: this.generateData(props.type, arr[2], arr[3])
		  },
		  {
			name: '',
			data: this.generateData(props.type, arr[4], arr[5])
		  },
		  {
			name: '',
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
	  };
	}
  
	generateData(dataType, startDate, endDate) {
		var i = 0;
		var series = [];
		var xLabel = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		if (startDate != -1) {
			var s = new Date();
			s.setDate(startDate);
			var e = new Date();
			e.setDate(endDate);
			var diff = (e.getTime()-s.getTime())/(24*3600*1000);
			while (i < diff) {
				var x = xLabel[i];
				s.setDate(startDate + i);
				e.setDate(startDate + i + 1);
				DataAdaptor(dataType, s, e)
				.then((data) => {series.push({
					x: x,
					y: data
				})})
				.then(() => {series.push({
					x: x,
					y: 0})});
				i++;
			}
		} else {
			while (i < 7) {
				var x = xLabel[i];
				series.push({
					x: x,
					y: 0});
				i++;
			}
		}
		return series;
	}

	getWeekStartEnd(startDate, endDate) {
		console.log(endDate.getDate());
		var diff = (endDate.getTime()-startDate.getTime())/(24*3600*1000);
		var A = new Array();
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
  
	render() {
	  return (
		<div id="chart">
		<ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
	  	</div>
		  
	  );
	}
  }
  
export default HeatMap;

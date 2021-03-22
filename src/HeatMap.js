import React from "react";
import ReactApexChart from "react-apexcharts";

class HeatMap extends React.Component {
	constructor(props) {
	  super(props);
  
	  var height = 7
	  this.state = {      
		series: [{
			name: '',
			data: this.generateData(height, 22)
		  },
		  {
			name: '',
			data: this.generateData(height, 15)
		  },
		  {
			name: '',
			data: this.generateData(height, 8)
		  },
		  {
			name: '',
			data: this.generateData(height, 1)
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
  
	generateData(count, ymin) {
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
  
>>>>>>> 10dcfe08f5dfb815d8d80320370451ebafb304f0

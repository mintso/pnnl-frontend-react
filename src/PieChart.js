import React from 'react';
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
          this.state = {
            series: [44, 55, 13, 43],
            options: {
              chart: {
                width: 348,
                type: 'pie',
              },
              labels: ['Summer Occurrence', 'Controlled Summer', 'Controlled Winter', 'Override Release'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          };
        }
        render() {
          return (
      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={350} />
</div>
)};
}
export default PieChart;

import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';


class StackedChart extends Component {
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }
    toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "PNNL StackedBar",
                fontFamily: "verdana"
            },
            axisY: {
                title: "Unit",
                suffix: "k"
            },
            toolTip: {
                shared: true,
                reversed: true
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "right",
                reversed: true,
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            data: [
                {
                    type: "stackedColumn",
                    name: "ZoneTemperature",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "0", y: 14 },
                        { label: "1", y: 12 },
                        { label: "2", y: 14 },
                        { label: "3", y: 13 },
                        { label: "4", y: 13 },
                        { label: "5", y: 13 },
                        { label: "6", y: 14 },
                        { label: "7", y: 14 },
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "ZoneAirflow",
                    showInLegend: true,
                    yValueFormatString: "#,###k",
                    dataPoints: [
                        { label: "0", y: 13 },
                        { label: "1", y: 13 },
                        { label: "2", y: 15 },
                        { label: "3", y: 16 },
                        { label: "4", y: 17 },
                        { label: "5", y: 17 },
                        { label: "6", y: 18 },
                        { label: "7", y: 18 },
                    ]
                }]
        }

        return (
            <div>
                <CanvasJSReact.CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default StackedChart;

    
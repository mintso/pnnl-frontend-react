import React, {Component} from 'react';
import CanvasJSReact from './canvasjs.react';


class StackedChart extends Component {
    constructor() {
        super();
        this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }

    render() {
        const zoneTemperature = {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Zone Temperature",
                fontFamily: "verdana"
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
                    name: "Summer Occurrence",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 10},
                        {label: "3/21/21", y: 25},
                        {label: "3/22/21", y: 25},
                        {label: "3/23/21", y: 25},
                        {label: "3/24/21", y: 25},
                        {label: "3/25/21", y: 25},
                        {label: "3/26/21", y: 25},
                        {label: "3/27/21", y: 0},
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Controlled Winter",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 0},
                        {label: "3/21/21", y: 0},
                        {label: "3/22/21", y: 0},
                        {label: "3/23/21", y: 0},
                        {label: "3/24/21", y: 0},
                        {label: "3/25/21", y: 0},
                        {label: "3/26/21", y: 0},
                        {label: "3/27/21", y: 20},
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Controlled Summer",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 40},
                        {label: "3/21/21", y: 25},
                        {label: "3/22/21", y: 25},
                        {label: "3/23/21", y: 25},
                        {label: "3/24/21", y: 25},
                        {label: "3/25/21", y: 25},
                        {label: "3/26/21", y: 0},
                        {label: "3/27/21", y: 0},
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Override Release",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 0},
                        {label: "3/21/21", y: 0},
                        {label: "3/22/21", y: 0},
                        {label: "3/23/21", y: 0},
                        {label: "3/24/21", y: 0},
                        {label: "3/25/21", y: 0},
                        {label: "3/26/21", y: 25},
                        {label: "3/27/21", y: 30},
                    ]
                }
                ]
        }

        const zoneAirFlow = {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Zone AirFlow",
                fontFamily: "verdana"
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
                    name: "Normal Operation",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 10},
                        {label: "3/21/21", y: 25},
                        {label: "3/22/21", y: 25},
                        {label: "3/23/21", y: 25},
                        {label: "3/24/21", y: 25},
                        {label: "3/25/21", y: 25},
                        {label: "3/26/21", y: 25},
                        {label: "3/27/21", y: 0},
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Hunting",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 0},
                        {label: "3/21/21", y: 0},
                        {label: "3/22/21", y: 0},
                        {label: "3/23/21", y: 0},
                        {label: "3/24/21", y: 0},
                        {label: "3/25/21", y: 0},
                        {label: "3/26/21", y: 0},
                        {label: "3/27/21", y: 20},
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Constant",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 40},
                        {label: "3/21/21", y: 25},
                        {label: "3/22/21", y: 25},
                        {label: "3/23/21", y: 25},
                        {label: "3/24/21", y: 25},
                        {label: "3/25/21", y: 25},
                        {label: "3/26/21", y: 0},
                        {label: "3/27/21", y: 0},
                    ]
                },
                {
                    type: "stackedColumn",
                    name: "Override",
                    showInLegend: true,
                    dataPoints: [
                        {label: "3/20/21", y: 0},
                        {label: "3/21/21", y: 0},
                        {label: "3/22/21", y: 0},
                        {label: "3/23/21", y: 0},
                        {label: "3/24/21", y: 0},
                        {label: "3/25/21", y: 0},
                        {label: "3/26/21", y: 25},
                        {label: "3/27/21", y: 30},
                    ]
                }
            ]
        }

        return (
            <>
                <div style={{display: 'flex', justifyContent: 'start'}}>
                    <CanvasJSReact.CanvasJSChart options={zoneTemperature}
                                                 onRef={ref => this.chart = ref}
                    />
                    <CanvasJSReact.CanvasJSChart options={zoneAirFlow}
                                                 onRef={ref => this.chart = ref}
                    />
                </div>
            </>
        );
    }
}

export default StackedChart;

    
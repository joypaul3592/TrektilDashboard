import React from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);









const Chart = () => {


    // const data = () => {
    //     return {
    //         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //         datasets: [
    //             {
    //                 label: "First dataset",
    //                 data: [33, 53, 85, 41, 44, 65],
    //                 fill: "start",
    //                 backgroundColor: (context) => {
    //                     const ctx = context.chart.ctx;
    //                     const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    //                     gradient.addColorStop(0, "rgba(250,174,50,1)");
    //                     gradient.addColorStop(1, "rgba(250,174,50,0)");
    //                     return gradient;
    //                 },
    //                 borderColor: "rgba(75,192,192,1)"
    //             },
    //             {
    //                 label: "Second dataset",
    //                 data: [33, 25, 35, 51, 54, 76],
    //                 fill: "start",
    //                 borderColor: "#742774"
    //             }
    //         ]
    //     };
    // };


    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: "start",
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };



    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                tension: 0.35
            }
        }
    };


    const data2 = {
        labels: [
            'Boston',
            'Worcester',
            'Springfield',
            'Lowell',
            'Cambridge',
            'New Bedford'
        ],
        datasets: [
            {
                data: [617594, 181045, 153060, 106519, 105162, 95072],
                //backgroundColor:'green',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    }

    return (
        <div className=' h-96 w-full '>

            <Line data={data} options={options} width={100}
                height={50} />

            {/* <Line
                data={data}
                options={{
                    title: {
                        display: 'joy',
                        text: 'Largest Cities in Massachusetts',
                        fontSize: 25
                    },
                    legend: {
                        display: 'joy',
                        position: 'right',
                        labels: {
                            fontColor: '#000',
                            backgroundColor: 'red'
                        }
                    }
                }}
            /> */}



        </div>
    );
};

export default Chart;
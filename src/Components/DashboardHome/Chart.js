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





    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Auc", "Nov", "Dec"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65, 12, 86, 48, 63, 37, 65],
                fill: "start",
                backgroundColor: "rgba(77, 53, 189, 0.8)",
                borderColor: "rgba(75,192,192,0)"
            }
        ]
    };



    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
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


    return (
        <div className=' h-full w-full  relative border border-gray-300 p-5'>
            <div className=' flex items-center justify-between mb-6 '>
                <h1>Overview the booking with our site</h1>
                <div className=' flex items-center rounde text-sm'>
                    <button className='w-1/2 py-0.5 text-white bg-red-400 px-4 rounded-l'>Month</button>
                    <button className='w-1/2 py-0.5  bg-red-200 px-4 rounded-r'>Year</button>
                </div>
            </div>
            <div className=' h-[22rem]'>
                <Line data={data} options={options} width={100}
                    height={50} />
            </div>


        </div>
    );
};

export default Chart;
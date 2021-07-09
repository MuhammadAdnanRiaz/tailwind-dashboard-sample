import React from "react";
import { Line } from "react-chartjs-2";

let start = new Date(),
  end = new Date();

start.setDate(start.getDate() - 7); // set to 'now' minus 7 days.
start.setHours(0, 0, 0, 0);

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [
        {
          x: new Date().setDate(new Date().getDate() - 7),
          y: 12,
        },
        {
          x: new Date().setDate(new Date().getDate() - 6),
          y: 8,
        },
        {
          x: new Date().setDate(new Date().getDate() - 5),
          y: 4,
        },
        {
          x: new Date().setDate(new Date().getDate() - 3),
          y: 4,
        },
      ],
      label: "Johnatan",
      borderColor: "#3e95cd",
      fill: false,
    },
    {
      data: [
        {
          x: new Date().setDate(new Date().getDate() - 7),
          y: 10,
        },
        {
          x: new Date().setDate(new Date().getDate() - 6),
          y: 7,
        },
        {
          x: new Date().setDate(new Date().getDate() - 5),
          y: 1,
        },
        {
          x: new Date().setDate(new Date().getDate() - 3),
          y: 3,
        },
      ],
      label: "Marco",
      borderColor: "#8e5ea2",
      fill: false,
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          min: start,
          max: end,
          unit: "day",
        },
      },
    ],
  },
};

const LineChart = () => (
  <div className="flex-1  px-3 py-3 bg-gray-100 shadow-lg rounded-md">
    <div className="w-full">
      <h1 className="text-lg text-center leading-6 font-medium text-gray-900">
        Visit Completion Stats
      </h1>
      <div className="mt-2  text-base text-center text-gray-500">
        Number of visit drivers completed in last 7 days
      </div>
    </div>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;

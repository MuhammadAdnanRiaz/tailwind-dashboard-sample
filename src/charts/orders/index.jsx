import React from "react";
import { Bar } from "react-chartjs-2";

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
      label: "Visits",
      borderColor: "#8e5ea2",
      backgroundColor: "#8e5ea2",
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

const OrderChart = () => (
  <div className="flex-1 px-3 py-3 bg-gray-100 shadow-lg rounded-md">
    <div className="w-full">
      <h1 className="text-lg text-center leading-6 font-medium text-gray-900">
        Orders Stats
      </h1>
      <div className="mt-2  text-base text-center text-gray-500">
        Number of Orders
      </div>
    </div>
    <Bar data={data} options={options} />
  </div>
);

export default OrderChart;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
   scales: {
    x: {
      grid: {
        color: "rgb(255, 255, 255)", // vertical grid lines
      },
      ticks: {
        color: "#aaa", // x-axis labels
      },
    },
    y: {
      grid: {
        color: "rgb(255, 255, 255)", // horizontal grid lines
      },
      ticks: {
        color: "#aaa", // y-axis numbers
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
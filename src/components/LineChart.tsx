// "use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "react-datepicker/dist/react-datepicker.css";
import { format, subDays } from "date-fns";
import ButtonFilter from "./ButtonFilter";
// import DateComponent from "./DateComponent";
import {
  GraphContainer, GraphHeading,GraphImage,GraphReading,} from "@/styles/graph.styles";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartData = {
  labels: string[];
  datasets: {
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
    pointRadius: number;
    backgroundColor: string;
    pointBorderColor: string;
  }[];
};

// Declaring the generateChartData function
const generateChartData = (
  interval: string,
  customStart?: Date | null,
  customEnd?: Date | null
): ChartData => {
  const labels = [];
  const data = [];

  switch (interval) {
    case "thisWeek":
      for (let i = 0; i < 7; i++) {
        labels.push(format(subDays(new Date(), i), "d MMM"));
        data.push(Math.floor(Math.random() * 100));
      }
      break;

    case "custom":
      if (customStart && customEnd) {
        for (let i = 0; i < 7; i++) {
          labels.push(format(subDays(customEnd, i), "d MMM"));
          data.push(Math.floor(Math.random() * 100));
        }
      }
      break;

    default:
      break;
  }

  return {
    labels,
    datasets: [
      {
        data,
        fill: false,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "rgb(255, 99, 132)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };
};

const options = {
  scales: {
    x: {
      display: false, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false, // Hide the title
    },
  },
  maintainAspectRatio: false,
  height: 150,
};

const LineChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>(
    generateChartData("thisWeek")
  );

  const [selectedDateRange, setSelectedDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  useEffect(() => {
    // Fetch initial data based on default date range
    fetchData(selectedDateRange.start, selectedDateRange.end);
  }, []);

  const handleDateChange = (start: Date | null, end: Date | null) => {
    // Update the selected date range state
    setSelectedDateRange({ start, end });

    // Fetch data based on the selected date range
    fetchData(start, end);
  };

  const fetchData = (start: Date | null, end: Date | null) => {
    //  data fetching logic here
    // Generating random data
    const newChartData = generateChartData("custom", start, end);
    setChartData(newChartData);
  };

  return (
    <div>
      <ButtonFilter onDateChange={handleDateChange} />
      <GraphContainer>
        <GraphHeading>Earnings</GraphHeading>
        <GraphImage>
          <Line data={chartData} options={options} />
        </GraphImage>
        <GraphReading> SEK 2,582</GraphReading>
      </GraphContainer>

      {/* <div>
        <Line data={chartData} options={options} />
      </div> */}

      {/* <DateComponent
        selectedDateRange={selectedDateRange}
        placeholder="Select Date"
      /> */}
    </div>
  );
};

export default LineChart;

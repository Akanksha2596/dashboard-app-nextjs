"use client";
import React, { useState } from "react";
import { DateInput } from "@/styles/button.styles";
import SingleButton from "./SingleButton";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formatDateRange = (startDate: Date, endDate: Date): string => {
  const startDay = startDate.getDate();
  const endDay = endDate.getDate();
  const startMonthName = startDate.toLocaleString("default", {
    month: "short",
  });
  const endMonthName = endDate.toLocaleString("default", { month: "short" });

  if (startDay === endDay) {
    return `${startDay}th ${startMonthName}`;
  } else {
    return `${startDay}th ${startMonthName} - ${endDay}th ${endMonthName}`;
  }
};

const getThisWeekDateRange = (): [Date, Date] => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(
    currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
  );
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  return [startOfWeek, endOfWeek];
};

const DateComponent: React.FC = () => {
  // State to hold the current date
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // State to hold the input value
  const [inputValue, setInputValue] = useState<string>(
    formatDateRange(currentDate, currentDate)
  );

  // Function to handle "Last Month" button click
  const handleLastMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
    setInputValue(formatDateRange(newDate, newDate));
    console.log(newDate);
  };

  // Function to handle "Last Week" button click
  const handleLastWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
    setInputValue(formatDateRange(newDate, newDate));
    console.log(newDate);
  };

  // Function to handle "Yesterday" button click
  const handleYesterday = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
    setInputValue(formatDateRange(newDate, newDate));
    // console.log(newDate);
  };
  console.log(currentDate, "ccc");

  // Function to handle "This week" button click
  const handleThisWeek = () => {
    const [startOfWeek, endOfWeek] = getThisWeekDateRange();
    setCurrentDate(startOfWeek);
    setInputValue(formatDateRange(startOfWeek, endOfWeek));
    console.log(startOfWeek);
  };

  return (
    <>
      <SingleButton onClick={handleLastMonth} text="Last Month" />
      <SingleButton onClick={handleLastWeek} text="Last Week" />
      <SingleButton onClick={handleYesterday} text="Yesterday" />
      <SingleButton onClick={handleThisWeek} text="This Week" />
      <DateInput
        onChange={(date) => console.log(date)}
        selected={currentDate}
      />
    </>
  );
};

export default DateComponent;

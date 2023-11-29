// "use client";
import React, { useState } from "react";
import SingleButton from "./SingleButton";
import { ButtonContainer } from "@/styles/button.styles";
import DateComponent from "./DateComponent";
import { start } from "repl";

const ButtonFilter = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>();
  const [selectedDateRange, setSelectedDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  const [option, setOption] = useState<string | null>(null);

  const handleButtonClick = (option: string) => {
    const currentDate = new Date();

    switch (option) {
      case "yesterday":
        var yesterday = new Date(Date.now() - 864e5);

        setSelectedDateRange({
          start: yesterday,
          end: yesterday,
        });
        setOption(option);
        break;
      case "thisWeek":
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

        const endOfWeek = new Date(currentDate);
        endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

        setSelectedDateRange({ start: startOfWeek, end: endOfWeek });
        setOption(option);
        break;
      case "lastWeek":
        const startOfLastWeek = new Date(currentDate);
        startOfLastWeek.setDate(
          currentDate.getDate() - currentDate.getDay() - 7
        );

        const endOfLastWeek = new Date(currentDate);
        endOfLastWeek.setDate(currentDate.getDate() - currentDate.getDay() - 1);

        setSelectedDateRange({
          start: startOfLastWeek,
          end: endOfLastWeek,
        });
        setOption(option);
        break;
      case "lastMonth":
        const firstDayOfLastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );

        const lastDayOfLastMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        );

        setSelectedDateRange({
          start: firstDayOfLastMonth,
          end: lastDayOfLastMonth,
        });
        setOption(option);
        break;
      default:
        break;
    }
  };

  return (
    <ButtonContainer>
      <SingleButton
        text="This week"
        onClick={() => handleButtonClick("thisWeek")}
      />
      <SingleButton
        text="Yesterday"
        onClick={() => handleButtonClick("yesterday")}
      />
      <SingleButton
        text="Last week"
        onClick={() => handleButtonClick("lastWeek")}
      />
      <SingleButton
        text="Last month"
        onClick={() => handleButtonClick("lastMonth")}
      />
      <DateComponent
        selectedDateRange={selectedDateRange}
        placeholder="Select Date"
      />
    </ButtonContainer>
  );
};
export default ButtonFilter;

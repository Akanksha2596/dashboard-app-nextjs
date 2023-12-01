import React from "react";
import { DateInput, Wrapper } from "@/styles/button.styles";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = ({
  placeholder,
  selectedDateRange,
}: {
  placeholder: string;
  selectedDateRange: { start: Date | null; end: Date | null };
}) => {
  return (
    <Wrapper>
      <DateInput
        selected={selectedDateRange.start}
        placeholderText={placeholder}
        onChange={(date) => console.log(date)}
        startDate={selectedDateRange.start}
        endDate={selectedDateRange.end}
        selectsRange
        dateFormat="d MMM"
      />
    </Wrapper>
  );
};

export default DateComponent;


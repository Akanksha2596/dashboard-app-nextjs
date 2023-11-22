"use client";
import React, { useState } from "react";
import SingleButton from "./SingleButton";
import { ButtonContainer } from "@/styles/button.styles";
// import DatePicker from "react-datepicker";
import DateComponent from "./DateComponent";
const ButtonFilter = () => {
  return (
    <ButtonContainer>
      <DateComponent />
    </ButtonContainer>
  );
};
export default ButtonFilter;

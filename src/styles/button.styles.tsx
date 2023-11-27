import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range {
    background-color: #34554a;
    color: #fff;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #34554a;
    color: #fff;
    border-radius: 20px;
  }

  .react-datepicker__week--selected {
    background-color: #34554a;
    border-radius: 20px;
    color: #fff;
  }

  .react-datepicker__week--keyboard-selected {
    background-color: #34554a;
    border-radius: 20px;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 32px;
  padding-bottom: 10px;
  gap: 5px;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 15px;

  &::-webkit-scrollbar {
    height: 5px;
    border-radius: 5px;
    background-color: lightgray;
  }

  @media (max-width: 992px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 576px) {
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  display: flex;
  margin-right: 10px;
  align-items: center;
  align-self: center;
  width: 89px;
  height: 39px;
  padding: 0px 14px;
  border-radius: 20px;
  border: 1px solid #dddddd;
  color: #9d9d9d;
  background-color: white;
  white-space: nowrap;

  &:hover {
    border: 1px solid black;
    color: black;
    cursor: pointer;
  }
`;

export const DateInput = styled(DatePicker)`
  display: flex;
  align-items: center;
  width: 146px;
  height: 39px;
  padding: 0px 10px;
  border-radius: 20px;
  border: 1px solid rgba(58, 58, 58, 1);
  gap: 5px;
  font-family: Strawford;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(58, 58, 58, 1);
  cursor: pointer;
`;

export const ButtonText = styled.text`
  font-family: Strawford;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

export const RootWrapper = styled.div`
  margin: 50px;
  // outline: solid 1px black;
`;
export const TabWrapper = styled.div`
  display: flex;
`
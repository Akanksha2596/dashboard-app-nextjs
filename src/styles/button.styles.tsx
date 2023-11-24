import styled from "styled-components";
import DatePicker from "react-datepicker";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 32px;
  gap: 5px;
  flex-wrap: nowrap;
  overflow-x: auto;

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
    opacity: 0.8;
    transform: scale(0.98);
  }
`;

export const DateInput = styled(DatePicker)`
  display: flex;
  align-items: center;
  align-self: center;
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

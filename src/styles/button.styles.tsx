import styled from "styled-components";
import DatePicker from "react-datepicker";
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 5px;
  border: 1px solid black;
  max-width: 100%;
`;

export const Button = styled.button`
  display: flex;
  margin-right: 5px;
  align-items: center;
  align-self: center;
  width: 91px;
  height: 39px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #dddddd;
  color: #9d9d9d;
  gap: 5px;

  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
`;

export const DateInput = styled(DatePicker)`
  // margin-right: 10px;
  // padding: 5px;
  display: flex;
  margin-right: 5px;
  align-items: center;
  align-self: center;
  width: 91px;
  height: 39px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #dddddd;
  color: #9d9d9d;
  gap: 5px;
`;

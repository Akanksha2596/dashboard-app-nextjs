import styled from "styled-components";

export const GraphContainer = styled.div`
  height: 292px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: auto;
`;

export const GraphHeading = styled.h3`
  height: 86px;
  padding: 32px, 32px, 28px, 32px;
  gap: 16px;
  font-family: Strawford;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

export const GraphImage = styled.img`
  height: 108px;
  gap: 10px;
`;

export const GraphReading = styled.h1`
  display: flex;
  height: 82px;
  padding: 0px, 32px, 32px, 32px;
  gap: 16px;
  font-family: Strawford;
  font-size: 42px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: center;
`;

import styled from "styled-components";

export const GraphContainer = styled.div`
  height: 292px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 15px;
`;

export const GraphHeading = styled.p`
  height: 86px;
  padding: 32px, 32px, 28px, 32px;
  gap: 16px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  /* text-align: left; */
  padding: 30px;
  display: flex;
  padding: 32px 32px 28px 32px;
  align-items: center;
  /* gap: 16px; */
  align-self: stretch;
`;

export const GraphImage = styled.div`
  height: 108px;
  gap: 10px;
`;

export const GraphReading = styled.p`
  display: flex;
  height: 82px;
  /* padding: 0px, 32px, 32px, 32px; */
  gap: 16px;
  padding-left: 25px;
  padding-right: 20px;
  font-size: 42px;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0em;
  /* text-align: center; */
`;

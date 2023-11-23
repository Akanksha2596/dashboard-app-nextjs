import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 1208px;
  height: 440px;
  gap: 19px;
  // border: 1px solid pink;
  margin-top: 10px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 390px;
  height: 90px;
  padding: 0px, 32px, 0px, 32px;
  justify: space-between;
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
`;

export const HeadingText = styled.h3`
  font-family: Strawford;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  width: 130px;
  height: 26px;
`;

export const ArrowIcon = styled.img`
  width: 8.3px;
  height: 14.52px;
  gap: 10px;
`;

export const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 390px;
  height: 440px;
  border-radius: 10px;
  // gap: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
    background: #f1f1f1;
  }
`;

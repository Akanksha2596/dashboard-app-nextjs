import styled from "styled-components";
// import Image from "next/image";

export const ItemContainer = styled.div`
  display: flex;
  height: 70px;
  padding: 10px 32px;
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
  min-width: 390px;
`;

export const SingleItem = styled.div`
  display: flex;
  height: 49.17px;
  gap: 10px;
`;

export const ProductImage = styled.img`
  height: 49.17px;
  width: 30px;
  gap: 10px;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 217px;
  height: 41.17px;
  gap: 4px;
`;

export const SubContentDiv = styled.div`
  width: 217px;
  height: 16.17px;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;

export const Heading = styled.p`
  font-family: Strawford;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
`;

export const SubHeading = styled.span`
  font-family: Strawford;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: black;

  &.percent {
    background-color: rgba(244, 240, 236, 1);
    border-radius: 2.78px;
  }
`;

export const ItemWrapper = styled.div`
  max-height: 349px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 1px;
    background: #f1f1f1;
  }
`;

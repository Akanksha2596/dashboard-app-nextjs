import styled from "styled-components";
import { myFont } from "@/pages/_app";
// export const ItemContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 0.8px solid rgba(221, 221, 221, 1);
// `;

export const SingleItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* height: 49.17px; */
  height: 70px;
  padding: 10px 32px;
  gap: 10px;
  width: 100%;
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
`;

export const ImgContentDiv = styled.div`
  display: flex;
`;

export const ProductImage = styled.img`
  height: 49.17px;
  width: 30px;
  gap: 10px;
`;

export const ContentDiv = styled.div<{
  $flexEnd?: boolean;
}>`
  align-items: ${(props) => (props.$flexEnd ? "flex-end" : "")};
  display: flex;
  flex-direction: column;
  width: 217px;
  height: 41.17px;
  gap: 4px;
  /* font-family: Strawford; */
`;

export const SubContentDiv = styled.div`
  display: flex;
  width: 217px;
  height: 16.17px;
  gap: 10px;
  /* font-family: Strawford; */
`;

export const Heading = styled.p`
  /* font-family: Strawford; */
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
`;

export const SubHeading = styled.span`
  /* font-family: Strawford; */
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

export const Wrapper = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-top: 20px;
  border-radius: 10px;
`;

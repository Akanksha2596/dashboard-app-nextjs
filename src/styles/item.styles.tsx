import styled from "styled-components";
// import { myFont } from "@/pages/_app";
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
  /* height: 70px; */
  /* padding: 10px 32px; */
  padding: 10px 20px 10px 20px;
  gap: 10px;
  /* width: 100%; */
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
`;

export const ImgContentDiv = styled.div`
  display: flex;
 
`;

export const ProductImage = styled.img`
  /* max-width: fit-content;
  max-width: fit-content;
  /* gap: 10px;*/
  /* gap: 10px;
  width: 40px;
  aspect-ratio: auto 40 / 40;
  height: 40px; */
  margin-right: 5px;
  width: 25px;
`;

export const ContentDiv = styled.div<{
  $flexEnd?: boolean;
}>`
  align-items: ${(props) => (props.$flexEnd ? "flex-end" : "center")};
  /* display: flex; */
  flex-direction: column;
  /* width: 217px; */
  /* height: 41.17px; */
  gap: 4px;
  align-self: stretch;
  /* justify-content: center; */
  align-items: flex-end;
  /* width: 50%; */
`;

export const SubContentDiv = styled.div`
  display: flex;
  width: 217px;
  height: 16.17px;
  gap: 10px;
  /* flex: 1 0 0;
  align-self: center; */
`;

export const Heading = styled.p`
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 21px;
  font-style: normal;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
`;

export const SubHeading = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: black;

  &.percent {
    display: flex;
    padding: 2.087px 4.174px;
    justify-content: center;
    align-items: center;
    gap: 5.575px;
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

import styled from "styled-components";

// export const ItemContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 0.8px solid rgba(221, 221, 221, 1);
// `;

export const SingleItem = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
  /* height: 49.17px; */
  /* height: 70px; */
  /* padding: 10px 32px; */
  /* padding: 10px 20px; */
  gap: 10px;
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
  &.topProducts {
    padding: 10px 20px 10px 20px;
  }
  &.topPosts {
    padding: 10px 20px;
  }
  &.topStores {
    padding: 20px 26px;
  }
`;

export const ImgContentDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductImage = styled.img`
  display: "flex";
  flex-direction: "column";
  width: 40px;
  aspect-ratio: auto 40 / 40;
  height: 40px;
  background: "white";
  border: "1px solid blue";
  justify-content: "center";
  align-items: center;
  margin-right: 10px;
`;

export const ContentDiv = styled.div<{
  $flexEnd?: boolean;
}>`
  align-items: ${(props) => (props.$flexEnd ? "flex-end" : "")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  align-self: stretch;
  /* border: 1px solid red; */
`;

export const SubContentDiv = styled.div`
  /* display: flex;
  width: 217px;
  height: 16.17px;
  gap: 10px;
  /* flex: 1 0 0;
  align-self: center; */
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex: 1 0 0;
  width: 100%;
  /* border: 1px solid green; */
`;

export const Heading = styled.p`
  overflow: hidden;
  color: var(--Black, #3a3a3a);
  text-overflow: ellipsis;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  /* width: 100%; */
  /* width: 50%; */
  /* white-space: nowrap; */
  /* display: -webkit-box; */
  /* -webkit-box-orient: vertical; */
  /* -webkit-line-clamp: 1; */
  /* flex: 1 0 0; */
`;

export const SubHeading = styled.span`
  color: var(--Black, #3a3a3a);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

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

import styled from "styled-components";
// import Image from "next/image";

export const ItemContainer = styled.div`
  height: 70px;
  width: 390px;
  padding: 10px 32px;
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
`;

export const SingleItem = styled.div`
display:flex;
flex-direction: row;
justigy-content: space-between;
height 49.17px;
width: 326px;
gap:10px;
border: 1px solid black;
`;

export const ProductImage = styled.img`
  height: 49.17px;
  width: 30px;
  gap: 10px;
`;
export const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 217px;
  height: 41.17px;
  gap: 4px;
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

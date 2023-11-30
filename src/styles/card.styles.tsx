import styled from "styled-components";

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
  flex?: string;
  flexDirection?: string;
  marginTop?: number;
  marginLeft?: number;
};

export const HeadingContainer = styled.div`
  display: flex;
  padding: 0px, 32px, 0px, 32px;
  justify-content: space-between;
  border-bottom: 0.8px solid rgba(221, 221, 221, 1);
  padding: 30px;
`;

export const HeadingText = styled.h3`
  /* font-family: Strawford; */
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  width: 130px;
  height: 26px;
`;

export const Columns = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-top: ${({ marginTop }) => marginTop + `px`};
  margin-left: ${({ marginLeft }) => marginLeft + `px`};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 80vh;
  border-radius: 10px;
  margin: 5px;
  min-width: 32%;

  @media (max-width: 576px) {
    flex: ${({ sizeSm }) => sizeSm};
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex: ${({ sizeMd }) => sizeMd};
    border-radius: 10px;
  }

  @media (max-width: 992px) {
    flex: ${({ sizeLg }) => sizeLg};
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    flex: ${({ sizeXl }) => sizeXl};
    border-radius: 10px;
  }
`;

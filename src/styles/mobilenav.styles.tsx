import styled from "styled-components";
import Link from "next/link";

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 20px, 33px;
`;

export const Title = styled.h3`
  font-size: 18.67px;
  font-weight: bold;
`;

export const ArrowIcon = styled(Link)`
  margin-left: 20px;
  width: 16.596px;
  height: 16.596px;
`;

export const CrossIcon = styled(Link)`
  margin-right: 20px;
  width: 16.596px;
  height: 16.596px;
`;

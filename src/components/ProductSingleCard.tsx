import styled from "styled-components";
import React from "react";
import { SingleContainer, HeadingContainer } from "@/styles/card.styles";
import { Item } from "./Item";

type CardProps = {
  HeadingText: string;
  ArrowIcon: string;
};

const ProductSingleCard: React.FC<CardProps> = ({ HeadingText, ArrowIcon }) => {
  return (
    <>
      <SingleContainer>
        <HeadingContainer>
          <h3>{HeadingText}</h3>
          <img src={ArrowIcon} />
        </HeadingContainer>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </SingleContainer>
    </>
  );
};
export default ProductSingleCard;

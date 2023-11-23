import styled from "styled-components";
import React from "react";
import { SingleContainer, HeadingContainer } from "@/styles/card.styles";
import StoreItem from "./StoreItem";

type CardProps = {
  HeadingText: string;
  ArrowIcon: string;
};

const StoreSingleCard: React.FC<CardProps> = ({ HeadingText, ArrowIcon }) => {
  return (
    <>
      <SingleContainer>
        <HeadingContainer>
          <h3>{HeadingText}</h3>
          <img src={ArrowIcon} />
        </HeadingContainer>
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
        <StoreItem />
      </SingleContainer>
    </>
  );
};
export default StoreSingleCard;

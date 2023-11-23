import styled from "styled-components";
import React from "react";
import ProductSingleCard from "./ProductSingleCard";
import { CardContainer } from "@/styles/card.styles";
import PostSingleCard from "./PostSingleCard";
import StoreSingleCard from "./StoreSingleCard";

const Card = () => {
  return (
    <CardContainer>
      <ProductSingleCard HeadingText="Top Products" ArrowIcon=">" />
      <PostSingleCard HeadingText="Top Posts" ArrowIcon=">" />
      <StoreSingleCard HeadingText="Top Stores" ArrowIcon=">" />
    </CardContainer>
  );
};

export default Card;

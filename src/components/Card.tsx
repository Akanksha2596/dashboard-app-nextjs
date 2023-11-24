import styled from "styled-components";
import React from "react";
import ProductSingleCard from "./ProductSingleCard";
import { CardContainer } from "@/styles/card.styles";

const Card = () => {
  return (
    <CardContainer>
      <ProductSingleCard />
    </CardContainer>
  );
};

export default Card;

import { SingleItem } from "@/styles/item.styles";
import {
  ItemContainer,
  ProductImage,
  Heading,
  ContentDiv,
} from "@/styles/postitem.styles";
import React from "react";

const PostItem = () => {
  return (
    <ItemContainer>
      <SingleItem>
        <ProductImage src="/personimage.png" />
        <ContentDiv>
          <Heading>I badrumsskåpet med Bianca Ingrosso 🌸</Heading>
          <Heading>SEK 962</Heading>
        </ContentDiv>
      </SingleItem>
    </ItemContainer>
  );
};

export default PostItem;

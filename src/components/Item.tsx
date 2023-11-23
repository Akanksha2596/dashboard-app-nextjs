import {
  ContentDiv,
  Heading,
  ItemContainer,
  ProductImage,
  SingleItem,
  SubContentDiv,
  SubHeading,
} from "@/styles/item.styles";
import React from "react";
import PostItem from "./PostItem";
import StoreItem from "./StoreItem";

export const Item = () => {
  return (
    <>
      <ItemContainer>
        <SingleItem>
          <ProductImage src="/nail-polish.png" />
          <ContentDiv>
            <Heading>Nioxin Thickening Gel 140ml</Heading>
            <SubContentDiv>
              <SubHeading> 2 SEK / Click </SubHeading>
              <SubHeading> Pricerunner</SubHeading>
            </SubContentDiv>
          </ContentDiv>
          <ContentDiv>
            <Heading>SEK 625</Heading>
            <SubHeading> CVR 17% </SubHeading>
          </ContentDiv>
        </SingleItem>
      </ItemContainer>
      
      {/* <ItemContainer>
        <SingleItem>
          <ProductImage src="/Product Image (1).png" />
          <ContentDiv>
            <Heading>Prada Paradoxe Eau De Parfum 50 ml</Heading>
            <SubContentDiv>
              <SubHeading> 12% </SubHeading>
              <SubHeading> Lykor</SubHeading>
            </SubContentDiv>
          </ContentDiv>
          <ContentDiv>
            <Heading>SEK 625</Heading>
            <SubHeading>CVR 17% </SubHeading>
          </ContentDiv>
        </SingleItem>
      </ItemContainer>
      <ItemContainer>
        <SingleItem>
          <ProductImage src="/Product Image (2).png" />
          <ContentDiv>
            <Heading>DeoDoc Violet Cotton Intimtvål 100 ml</Heading>
            <SubContentDiv>
              <SubHeading>12% </SubHeading>
              <SubHeading> Lyko</SubHeading>
            </SubContentDiv>
          </ContentDiv>
          <ContentDiv>
            <Heading>SEK 625</Heading>
            <SubHeading> CVR 17% </SubHeading>
          </ContentDiv>
        </SingleItem>
      </ItemContainer>
      <ItemContainer>
        <SingleItem>
          <ProductImage src="/Product Image (3).png" />
          <ContentDiv>
            <Heading>ghd Curve Soft Curl Tong</Heading>
            <SubContentDiv>
              <SubHeading> 12% </SubHeading>
              <SubHeading>Lyko</SubHeading>
            </SubContentDiv>
          </ContentDiv>
          <ContentDiv>
            <Heading>SEK 625</Heading>
            <SubHeading> CVR 17% </SubHeading>
          </ContentDiv>
        </SingleItem>
      </ItemContainer>
      <ItemContainer>
        <SingleItem>
          <ProductImage src="/nail-polish.png" />
          <ContentDiv>
            <Heading>Nioxin Thickening Gel 140ml</Heading>
            <SubContentDiv>
              <SubHeading>2 SEK / Click</SubHeading>
              <SubHeading> Pricerunner</SubHeading>
            </SubContentDiv>
          </ContentDiv>
          <ContentDiv>
            <Heading>SEK 625</Heading>
            <SubHeading> 312 Clicks </SubHeading>
          </ContentDiv>
        </SingleItem>
      </ItemContainer> */}
    </>
  );
};

import { HeadingContainer, Wrapper } from "@/styles/card.styles";
import {
  ContentDiv,
  Heading,
  ItemContainer,
  ProductImage,
  SingleItem,
  SubContentDiv,
  SubHeading,
  ItemWrapper,
} from "@/styles/item.styles";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

type Product = {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  type?: string;
  percent?: number;
  cvrPercent?: number;
};

type MyComponentProps = {
  topProductData: Product[];
  HeadingText: string;
};

export const Item = (props: MyComponentProps) => {
  return (
    <>
      {/* <Wrapper> */}
        <HeadingContainer>
          <h3>{props.HeadingText}</h3>
          <span>
            <SlArrowRight />
          </span>
        </HeadingContainer>
        <ItemWrapper>
          {props.topProductData.map((topProduct) => {
            return (
              <ItemContainer>
                <SingleItem>
                  {props.HeadingText === "Top Stores" ? (
                    ""
                  ) : (
                    <ProductImage src={topProduct.image} />
                  )}
                  <ContentDiv>
                    <Heading>{topProduct.name}</Heading>
                    <SubContentDiv>
                      {props.HeadingText === "Top Products" ? (
                        <SubHeading> SEK {topProduct.price}</SubHeading>
                      ) : (
                        ""
                      )}
                      <SubHeading>{topProduct.type}</SubHeading>
                    </SubContentDiv>
                  </ContentDiv>
                  <ContentDiv>
                    <Heading>SEK {topProduct.percent}</Heading>
                    {props.HeadingText === "Top Products" ? (
                      <SubHeading> CVR {topProduct.cvrPercent} </SubHeading>
                    ) : (
                      ""
                    )}
                  </ContentDiv>
                </SingleItem>
              </ItemContainer>
            );
          })}
        </ItemWrapper>
      {/* </Wrapper> */}
    </>
  );
};

import { HeadingContainer } from "@/styles/card.styles";
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
import Link from "next/link";

type Product = {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  type?: string;
  percent?: number;
  cvrPercent?: number;
};

export type MyComponentProps = {
  topProductData: Product[];
  HeadingText: string;
};

export const Item = (props: MyComponentProps) => {
  return (
    <>
      <HeadingContainer>
        <h3>{props.HeadingText}</h3>
        <span>
          <Link
            href={
              props.HeadingText === "Top Products"
                ? "/topProducts"
                : props.HeadingText === "Top Posts"
                ? "/topPosts"
                : props.HeadingText === "Top Stores"
                ? "/topStores"
                : ""
            }
          >
            <SlArrowRight />
          </Link>
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
                      <SubHeading className="percent">
                        {topProduct.percent}%
                      </SubHeading>
                    ) : (
                      ""
                    )}
                    <SubHeading>{topProduct.type}</SubHeading>
                  </SubContentDiv>
                </ContentDiv>
                <ContentDiv>
                  <Heading>SEK {topProduct.percent}</Heading>
                  {props.HeadingText === "Top Products" ? (
                    <SubHeading>CVR {topProduct.cvrPercent}% </SubHeading>
                  ) : (
                    ""
                  )}
                </ContentDiv>
              </SingleItem>
            </ItemContainer>
          );
        })}
      </ItemWrapper>
    </>
  );
};

import { HeadingContainer } from "@/styles/card.styles";
// import img from "public/nail-polish.png";
// import Image from "next/image";
import {
  ContentDiv,
  Heading,
  // ItemContainer,
  ProductImage,
  SingleItem,
  SubContentDiv,
  SubHeading,
  ItemWrapper,
  ImgContentDiv,
} from "@/styles/item.styles";
import React from "react";
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
  HeadingText?: string;
  icon?: any;
  screen?: boolean;
  maxHeight?: boolean;
};

export const Item = (props: MyComponentProps) => {
  console.log(props, "props");
  return (
    <>
      <HeadingContainer screen={props.screen}>
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
            {props.icon}
          </Link>
        </span>
      </HeadingContainer>
      <ItemWrapper maxHeight={true}>
        {props.topProductData.map((topProduct) => {
          return (
            <SingleItem
              key={topProduct.id}
              className={
                props.HeadingText === "Top Products"
                  ? "topProducts"
                  : props.HeadingText === "Top Posts"
                  ? "topPosts"
                  : props.HeadingText === "Top Stores"
                  ? "topStores"
                  : ""
              }
            >
              <ImgContentDiv>
                {props.HeadingText === "Top Stores" ? (
                  ""
                ) : (
                  <ProductImage src={topProduct.image} alt="productimage" />
                )}
                <ContentDiv>
                  {props.HeadingText === "Top Posts" ? (
                    <Heading className="postspara">{topProduct.name}</Heading>
                  ) : (
                    <Heading className="ellipsis">{topProduct.name}</Heading>
                  )}
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
              </ImgContentDiv>
              <div>
                {props.HeadingText === "Top Posts" ? (
                  <Heading style={{ paddingTop: "7px" }}>SEK</Heading>
                ) : (
                  <Heading>SEK {topProduct.percent}</Heading>
                )}
                {props.HeadingText === "Top Products" ? (
                  <SubContentDiv>
                    <SubHeading>CVR</SubHeading>
                    <SubHeading>{topProduct.cvrPercent}%</SubHeading>
                  </SubContentDiv>
                ) : (
                  ""
                )}
              </div>
            </SingleItem>
          );
        })}
      </ItemWrapper>
    </>
  );
};

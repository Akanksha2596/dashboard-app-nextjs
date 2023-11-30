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
            {props.icon}
          </Link>
        </span>
      </HeadingContainer>
      <ItemWrapper>
        {props.topProductData.map((topProduct) => {
          return (
            <SingleItem
              className={
                props.HeadingText === "Top Products"
                  ? "topProducts"
                  : props.HeadingText === "Top Posts"
                  ? "topProducts"
                  : props.HeadingText === "Top Stores"
                  ? "topProducts"
                  : ""
              }
            >
              <ImgContentDiv>
                {props.HeadingText === "Top Stores" ? (
                  ""
                ) : (
                  // <div
                  //   style={{
                  //     display: "flex",
                  //     flexDirection: "column",
                  //     alignItems: "center",
                  //     justifyContent: "center",
                  //     flex: "1 0 0",
                  //     background: "white",
                  //     marginRight: "5px",
                  //     border: "1px solid blue",
                  //   }}
                  // >
                  <ProductImage src={topProduct.image} alt="productimage" />
                  //  </div>
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
              </ImgContentDiv>
              <div>
                <Heading>SEK {topProduct.percent}</Heading>
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

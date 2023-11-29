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
// import { SlArrowRight } from "react-icons/sl";
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
                ? "/topProducts"
                : props.HeadingText === "Top Stores"
                ? "/topProducts"
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
            <SingleItem>
              <ImgContentDiv>
                {props.HeadingText === "Top Stores" ? (
                  ""
                ) : (
                  <div>
                    <ProductImage src={topProduct.image} alt="productimage" />
                  </div>
                )}
                <ContentDiv>
                  <Heading>
                    {topProduct.name}
                  </Heading>
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
                  <SubHeading>CVR {topProduct.cvrPercent}% </SubHeading>
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
<div>
  <div>
    <img />
    <div>
      <span>Product Name</span>
      <div>
        <span>20%</span>
        <span>Lyco</span>
      </div>
    </div>
  </div>
</div>;
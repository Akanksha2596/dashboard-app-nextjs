import React, { useState, useEffect } from "react";
import { Item } from "./Item";
import topProductData from "../../TopProductsData.json";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";
import { RootWrapper } from "@/styles/button.styles";
import { Column, Columns } from "@/styles/card.styles";
import { SlArrowRight } from "react-icons/sl";
import Graph from "./Graph";

const MainContainer = () => {
  return (
    <RootWrapper className="removeMargin">
      <Graph />
      <Columns>
        <Column size={4}>
          <Item
            topProductData={topProductData}
            HeadingText="Top Products"
            icon={<SlArrowRight />}
          />
        </Column>
        <Column size={4}>
          <Item
            topProductData={topPostsData}
            HeadingText="Top Posts"
            icon={<SlArrowRight />}
          />
        </Column>
        <Column size={4}>
          <Item
            topProductData={topStoresData}
            HeadingText="Top Stores"
            icon={<SlArrowRight />}
          />
        </Column>
      </Columns>
    </RootWrapper>
  );
};

export default MainContainer;

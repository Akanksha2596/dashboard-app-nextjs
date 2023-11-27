import React from "react";
import ButtonFilter from "./ButtonFilter";
import Graph from "./Graph";
import { Item } from "./Item";
import topProductData from "../../TopProductsData.json";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";
import { RootWrapper } from "@/styles/button.styles";
import { Column, Columns } from "@/styles/card.styles";

const MainContainer = () => {
  return (
    <RootWrapper>
      <ButtonFilter />
      <Graph />
      <Columns>
        <Column size={4}>
          <Item topProductData={topProductData} HeadingText="Top Products" />
        </Column>
        <Column size={4}>
          <Item topProductData={topPostsData} HeadingText="Top Posts" />
        </Column>
        <Column size={4}>
          <Item topProductData={topStoresData} HeadingText="Top Stores" />
        </Column>
      </Columns>
    </RootWrapper>
  );
};

export default MainContainer;

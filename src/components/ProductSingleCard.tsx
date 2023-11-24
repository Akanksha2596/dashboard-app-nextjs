import styled from "styled-components";
import React from "react";
import { Item } from "./Item";
import topProductData from "../../TopProductsData.json";
import topPostsData from "../../TopPostsData.json";
import topStoresData from "../../TopStoresData.json";

const ProductSingleCard = () => {
  return (
    <>
      <Item topProductData={topProductData} HeadingText="Top Products" />
      <Item topProductData={topPostsData} HeadingText="Top Posts" />
      <Item topProductData={topStoresData} HeadingText="Top Stores" />
    </>
  );
};
export default ProductSingleCard;

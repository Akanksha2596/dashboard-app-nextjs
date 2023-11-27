import React from "react";
import { Item } from "@/components/Item";
import topPostsData from "../../TopPostsData.json";
import ButtonFilter from "@/components/ButtonFilter";
import { RootWrapper } from "@/styles/button.styles";
const topPosts = () => {
  return (
    <>
      <ButtonFilter />
      <Item topProductData={topPostsData} HeadingText="Top Posts" />
    </>
  );
};

export default topPosts;

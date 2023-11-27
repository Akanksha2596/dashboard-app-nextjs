import React from "react";
import ButtonFilter from "@/components/ButtonFilter";
import { Item } from "@/components/Item";
import topStoresData from "../../TopStoresData.json";
const topStores = () => {
  return (
    <>
      <ButtonFilter />
      <Item topProductData={topStoresData} HeadingText="Top Stores" />
    </>
  );
};

export default topStores;

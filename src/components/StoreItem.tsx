import { Heading, ItemContainer, SingleItem } from "@/styles/storeitem.styles";
import React from "react";

const StoreItem = () => {
  return (
    <ItemContainer>
      <SingleItem>
        <Heading>Bangerhead</Heading>
        <Heading>SEK 2702</Heading>
      </SingleItem>
    </ItemContainer>
  );
};

export default StoreItem;

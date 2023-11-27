import React from "react";
import styled from "styled-components";
import Tabs from "@/components/Tabs";
import topProductsData from "../../TopProductsData.json";
import topStoresData from "../../TopStoresData.json";
import topPostsData from "../../TopPostsData.json";
import ButtonFilter from "@/components/ButtonFilter";
import { Item } from "@/components/Item";
import { Wrapper } from "@/styles/card.styles";
import { RootWrapper } from "@/styles/button.styles";

const Content = styled.div`
  margin-top: 20px;
`;

const Page: React.FC = () => {
  const tabs = ["Top Products", "Top Posts", "Top Stores"];

  return (
    <>
      <Tabs tabs={tabs} defaultTab={"Top Products"}>
        {(activeTab) => (
          <Content>
            {activeTab === "Top Products" && (
              <>
                <ButtonFilter />
                <Wrapper>
                  <Item
                    topProductData={topProductsData}
                    HeadingText="Top Products"
                  />
                </Wrapper>
              </>
            )}
            {activeTab === "Top Posts" && (
              <>
                <ButtonFilter />
                <Wrapper>
                  <Item topProductData={topPostsData} HeadingText="Top Posts" />
                </Wrapper>
              </>
            )}
            {activeTab === "Top Stores" && (
              <>
                <ButtonFilter />
                <Wrapper>
                  <Item
                    topProductData={topStoresData}
                    HeadingText="Top Stores"
                  />
                </Wrapper>
              </>
            )}
          </Content>
        )}
      </Tabs>
    </>
  );
};

export default Page;

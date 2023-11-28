import React from "react";
import styled from "styled-components";
import Tabs from "@/components/Tabs";
import topProductsData from "../../TopProductsData.json";
import topStoresData from "../../TopStoresData.json";
import topPostsData from "../../TopPostsData.json";
import { Item } from "@/components/Item";
import { Wrapper } from "@/styles/item.styles";

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
                <Wrapper>
                  <Item topProductData={topPostsData} HeadingText="Top Posts" />
                </Wrapper>
              </>
            )}
            {activeTab === "Top Stores" && (
              <>
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

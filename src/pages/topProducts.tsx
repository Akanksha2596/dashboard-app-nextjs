// import React from "react";
// import ButtonFilter from "@/components/ButtonFilter";
// import { Item } from "@/components/Item";
// import topProductData from "../../TopProductsData.json";
// const topProducts = () => {
//   return (
//     <>
//       <ButtonFilter />
//       <Item topProductData={topProductData} HeadingText="Top Products" />
//     </>
//   );
// };

// export default topProducts;
import React from "react";
import styled from "styled-components";
import Tabs from "@/components/Tabs";
import topProductsData from "../../TopProductsData.json";
import topStoresData from "../../TopStoresData.json";
import topPostsData from "../../TopPostsData.json";
import ButtonFilter from "@/components/ButtonFilter";
import { Item } from "@/components/Item";

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Page: React.FC = () => {
  const tabs = ["Top Products ", "Top Posts", "Tap Stores"];

  return (
    <PageContainer>
      <Tabs tabs={tabs} defaultTab={tabs[0]}>
        {(activeTab) => (
          <Content>
            {activeTab === "Top Products" && (
              <>
                <ButtonFilter />
                <Item
                  topProductData={topProductsData}
                  HeadingText="Top Posts"
                />
              </>
            )}
            {activeTab === "Top Posts" && (
              <>
                <ButtonFilter />
                <Item topProductData={topPostsData} HeadingText="Top Posts" />
              </>
            )}
            {activeTab === "Tap Stores" && (
              <>
                <ButtonFilter />
                <Item topProductData={topStoresData} HeadingText="Top Stores" />
              </>
            )}
          </Content>
        )}
      </Tabs>
    </PageContainer>
  );
};

export default Page;

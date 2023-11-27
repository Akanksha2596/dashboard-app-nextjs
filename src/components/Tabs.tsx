 import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  margin-bottom: 20px;
`;

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  margin-right: 10px;
`;

interface TabsProps {
  tabs: string[];
  defaultTab: string;
  children: (activeTab: string) => ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState("Top Products");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          isActive={activeTab === tab}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </TabButton>
      ))}
      <div>{children(activeTab)}</div>
    </TabsContainer>
  );
};

export default Tabs;

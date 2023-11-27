import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { RootWrapper, TabWrapper } from "@/styles/button.styles";

type TabButtonProps = {
  isActive: boolean;
};

const TabButton = styled.button<TabButtonProps>`
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  margin-right: 10px;
  display: flex;
  margin-right: 10px;
  align-items: center;
  width: 89px;
  height: 39px;
  padding: 0px 14px;
  border-radius: 20px;
  border: 1px solid #dddddd;
  color: #9d9d9d;
  background-color: white;
  white-space: nowrap;

  &:hover {
    border: 1px solid black;
    color: black;
    cursor: pointer;
  }
`;

type TabsProps = {
  tabs: string[];
  defaultTab: string;
  children: (activeTab: string) => ReactNode;
};

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab: string) => {
    console.log("Clicked tab:", tab);
    setActiveTab(tab);
  };

  return (
    <RootWrapper>
      <TabWrapper>
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            isActive={activeTab === tab}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </TabButton>
        ))}
      </TabWrapper>
      <div>{children(activeTab)}</div>
    </RootWrapper>
  );
};

export default Tabs;

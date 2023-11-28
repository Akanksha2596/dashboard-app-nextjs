import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { RootWrapper, TabWrapper } from "@/styles/button.styles";
import { SlArrowLeft } from "react-icons/sl";
import ButtonFilter from "./ButtonFilter";
import Link from "next/link";

type TabButtonProps = {
  isActive: boolean;
};

const TabButton = styled.button<TabButtonProps>`
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  margin-right: 10px;
  display: flex;
  align-items: center;
  height: 39px;
  padding: 0px 14px;
  border-radius: 20px;
  border: 1px solid black;
  color: black;
  background-color: white;
  white-space: nowrap;

  &:hover {
    border: 1px solid black;
    color: black;
    cursor: pointer;
  }
`;

const TabButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 12px;
`;

const ArrowDiv = styled.div`
  padding-left: 20px;
  padding-right: 30px;
`;

export type TabsProps = {
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
        <TabButtonWrapper>
          <ArrowDiv>
            <Link href="/">
              <SlArrowLeft />
            </Link>
          </ArrowDiv>
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              isActive={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabButtonWrapper>
        <ButtonFilter />
      </TabWrapper>
      <div>{children(activeTab)}</div>
    </RootWrapper>
  );
};

export default Tabs;

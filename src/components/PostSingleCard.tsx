import styled from "styled-components";
import React from "react";
import { SingleContainer, HeadingContainer } from "@/styles/card.styles";
import PostItem from "./PostItem";

type CardProps = {
  HeadingText: string;
  ArrowIcon: string;
};

const PostSingleCard: React.FC<CardProps> = ({ HeadingText, ArrowIcon }) => {
  return (
    <>
      <SingleContainer>
        <HeadingContainer>
          <h3>{HeadingText}</h3>
          <img src={ArrowIcon} />
        </HeadingContainer>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </SingleContainer>
    </>
  );
};
export default PostSingleCard;

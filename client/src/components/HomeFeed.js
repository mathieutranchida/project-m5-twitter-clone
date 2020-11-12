import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import TweetFeed from "./TweetComponent/TweetFeed";
import MeowPost from "./MeowPost";
import { TweetContext } from "./TweetComponent/TweetContext";

const HomeFeed = () => {
  const { homefeed } = useContext(TweetContext);
  let tweets = [];
  if (homefeed) {
    tweets = Object.values(homefeed.tweetsById);
  }

  return (
    <Wrapper>
      <Title>Home</Title>
      <MeowPost />
      {tweets.map((tweet, index) => {
        return <TweetFeed tweet={tweet} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 800px;
  border-right: 1px grey solid;
`;

const Title = styled.h1`
  margin: 5px 25px;
`;

const MeowForm = styled.div`
  width: 100%;
  border-top: rgb(230, 236, 240) 1px solid;
  border-bottom: rgb(230, 236, 240) 15px solid;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const MeowInput = styled.input`
  width: 100%;
  height: 200px;
`;
const MeowButton = styled.button`
  justify-self: right;
  text-align: center;
  width: 100px;
`;

export default HomeFeed;

import React, { useContext } from "react";
import styled from "styled-components";
import history from "../../history";

import Avatar from "./FeedTweet/Avatar";
import Header from "./FeedTweet/Header";
import TweetContents from "./FeedTweet/TweetContent";
import ActionBar from "./FeedTweet/ActionBar";

import { TweetContext } from "./TweetContext";

const TweetFeed = ({ tweet }) => {
  console.log(tweet);
  return (
    <MainWrapper
      onClick={() => {
        history.push(`/tweet/${tweet.id}`);
      }}
    >
      <Wrapper>
        <Avatar tweet={tweet} />
        <SecondaryDiv>
          <Header tweet={tweet} />
          <TweetContents tweet={tweet} />
        </SecondaryDiv>
      </Wrapper>
      <Divider />
      <ActionBar tweet={tweet} />
      <DividerBig />
    </MainWrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
  padding: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
  display: flex;
  align-items: flex-start;
`;

const SecondaryDiv = styled.div``;

const MainWrapper = styled.div``;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const DividerBig = styled.div`
  height: 3px;
  background: rgb(230, 236, 240);
`;

export default TweetFeed;

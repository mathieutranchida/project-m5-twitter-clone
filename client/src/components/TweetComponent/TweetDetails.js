import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./BigTweet/Header";
import TweetContents from "./BigTweet/TweetContent";
import ActionBar from "./BigTweet/ActionBar";
import { TweetContext } from "./TweetContext";

const TweetDetails = () => {
  return (
    <Wrapper>
      <Header />
      <TweetContents />
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default TweetDetails;

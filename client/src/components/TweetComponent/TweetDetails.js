import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import Header from "./BigTweet/Header";
import TweetContents from "./BigTweet/TweetContent";
import ActionBar from "./BigTweet/ActionBar";
import { TweetContext } from "./TweetContext";

const TweetDetails = () => {
  const [singleTweet, setSingleTweet] = React.useState(null);

  let { tweetId } = useParams();

  useEffect(() => {
    // Fetch a single Tweet for development purpose
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSingleTweet(data.tweet);
      });
  }, []);

  return (
    singleTweet && (
      <Wrapper>
        <Header singleTweet={singleTweet} />
        <TweetContents singleTweet={singleTweet} />
        <Divider />
        <ActionBar singleTweet={singleTweet} />
        <Divider />
      </Wrapper>
    )
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

import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import history from "../../history";

import Header from "./BigTweet/Header";
import TweetContents from "./BigTweet/TweetContent";
import ActionBar from "./BigTweet/ActionBar";
import { FiArrowLeft } from "react-icons/fi";
import { TweetContext } from "./TweetContext";

const IconStyle = {
  height: "30px",
  width: "30px",
  padding: "0px 10px",
  borderRight: "1px solid grey",
};

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
        <HeaderWrapper
          onClick={() => {
            history.push(`/`);
          }}
        >
          <FiArrowLeft style={IconStyle} />
          <Back>Back to home</Back>
        </HeaderWrapper>
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
  width: 800px;
  padding: 0px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
  border-right: 1px solid grey;
  border-bottom: 1px solid grey;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  cursor: pointer;
`;

const Back = styled.h1`
  margin: 10px 10px;
`;

export default TweetDetails;

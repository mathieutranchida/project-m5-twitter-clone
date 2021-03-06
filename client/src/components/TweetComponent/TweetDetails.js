import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import history from "../../history";

import Header from "./BigTweet/Header";
import TweetContents from "./BigTweet/TweetContent";
import ActionBar from "./BigTweet/ActionBar";
import { FiArrowLeft } from "react-icons/fi";
import Loading from "../Loading";
import ErrorWindow from "../ErrorWindow";

const IconStyle = {
  height: "30px",
  width: "30px",
  padding: "0px 10px",
  borderRight: "1px solid grey",
};

const TweetDetails = () => {
  const [singleTweet, setSingleTweet] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  let { tweetId } = useParams();

  useEffect(() => {
    // Fetch a single Tweet for development purpose
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSingleTweet(data.tweet);
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "error") {
    return <ErrorWindow />;
  }

  return singleTweet ? (
    <Wrapper>
      <HeaderWrapper
        onClick={() => {
          history.push(`/`);
        }}
        tabIndex="0"
        aria-label="Back to home"
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            history.push(`/`);
          }
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
  ) : (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
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

const LoadingWrapper = styled.div`
  position: relative;
  top: 375px;
  left: 375px;
`;

export default TweetDetails;

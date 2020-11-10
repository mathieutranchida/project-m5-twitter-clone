import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const ActionBar = () => {
  const { devTweet } = useContext(TweetContext);
  return (
    devTweet && (
      <Wrapper>
        <Avatar src={devTweet.author.avatarSrc} />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export default ActionBar;

import React, { useContext } from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";

import Action from "../FeedTweet/Action";
import { TweetContext } from "../TweetContext";

const IconStyle = {
  height: "22px",
  width: "20px",
};

const ActionBar = () => {
  return (
    <Wrapper>
      <ActionDiv>
        <Action color="rgb(27, 149, 224)" size={40}>
          <FiMessageCircle style={IconStyle} />
        </Action>
      </ActionDiv>
      <ActionDiv>
        <Stats></Stats>
        <Action color="rgb(23, 191, 99)" size={40}>
          <FiRepeat style={IconStyle} />
        </Action>
      </ActionDiv>
      <ActionDiv>
        <Stats></Stats>
        <Action color="rgb(224, 36, 94)" size={40}>
          <FiHeart style={IconStyle} />
        </Action>
      </ActionDiv>
      <ActionDiv>
        <Action color="rgb(27, 149, 224)" size={40}>
          <FiUpload style={IconStyle} />
        </Action>
      </ActionDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  height: 48px;
`;

const ActionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Stats = styled.div`
  margin-right: 10px;
`;

export default ActionBar;

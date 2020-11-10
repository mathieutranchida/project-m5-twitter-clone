import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const Header = () => {
  const { devTweet } = useContext(TweetContext);

  return devTweet ? (
    <Wrapper>
      <Name>
        <DisplayName>{devTweet.author.displayName}</DisplayName>
        <Username>@{devTweet.author.handle}</Username>
        <TimeStamp>INSERT TIMESTAMP HERE</TimeStamp>
      </Name>
    </Wrapper>
  ) : (
    <div>loading</div>
  );
};

const Wrapper = styled.header`
  display: flex;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  padding-right: 10px;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
  padding-right: 10px;
`;

const TimeStamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 15px;
`;

export default Header;

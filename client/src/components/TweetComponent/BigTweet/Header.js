import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const Header = ({ singleTweet }) => {
  return (
    singleTweet && (
      <Wrapper>
        <Avatar src={singleTweet.author.avatarSrc} />
        <Name>
          <DisplayName>{singleTweet.author.displayName}</DisplayName>
          <Username>@{singleTweet.author.handle}</Username>
        </Name>
      </Wrapper>
    )
  );
};

const Wrapper = styled.header`
  display: flex;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

export default Header;

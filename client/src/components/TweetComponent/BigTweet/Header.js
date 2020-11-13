import React, { useContext } from "react";
import styled from "styled-components";
import history from "../../../history";

import { TweetContext } from "../TweetContext";

const Header = ({ singleTweet }) => {
  return (
    singleTweet && (
      <Wrapper>
        <Avatar src={singleTweet.author.avatarSrc} />
        <Name>
          <DisplayName
            onClick={(event) => {
              event.stopPropagation();
              history.push(`/${singleTweet.author.handle}`);
            }}
            tabIndex="0"
            aria-label="view author's profile"
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                ev.stopPropagation();
                history.push(`/${singleTweet.author.handle}`);
              }
            }}
          >
            {singleTweet.author.displayName}
          </DisplayName>
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
  padding: 0px 16px;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

export default Header;

import React, { useContext } from "react";
import styled from "styled-components";
import history from "../../../history";

const Header = ({ tweet }) => {
  return (
    tweet && (
      <Wrapper>
        <Name>
          <DisplayName
            onClick={(event) => {
              event.stopPropagation();
              history.push(`/${tweet.author.handle}`);
            }}
          >
            {tweet.author.displayName}
          </DisplayName>
          <Username>@{tweet.author.handle}</Username>
          <TimeStamp>INSERT TIMESTAMP HERE</TimeStamp>
        </Name>
      </Wrapper>
    )
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
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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

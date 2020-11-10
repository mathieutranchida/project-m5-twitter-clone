import React, { useContext } from "react";
import styled from "styled-components";

const ActionBar = ({ tweet }) => {
  return (
    tweet && (
      <Wrapper>
        <Avatar src={tweet.author.avatarSrc} />
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

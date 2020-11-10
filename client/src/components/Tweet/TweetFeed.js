import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

const TweetFeed = () => {
  const { devTweet } = useContext(CurrentUserContext);
  console.log(devTweet);

  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h1``;

export default TweetFeed;

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import TweetFeed from "./TweetComponent/TweetFeed";
import TweetDetails from "./TweetComponent/TweetDetails";
import { CurrentUserContext } from "./CurrentUserContext";

const HomeFeed = () => {
  return (
    <Wrapper>
      <Title>Home feed</Title>
      <TweetFeed />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h1``;

export default HomeFeed;

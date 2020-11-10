import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const TweetContents = () => {
  const { devTweet } = useContext(TweetContext);

  return (
    devTweet && (
      <Wrapper>
        <Description>{devTweet.status}</Description>
        {devTweet.media.length > 0 && <Image src={devTweet.media[0].url} />}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  padding: 10px 0px 0px 0px;
`;

const Description = styled.div`
  font-size: 18px;
  padding: 0px 0px 10px 0px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding: 10px 0px 0px 0px;
`;

export default TweetContents;

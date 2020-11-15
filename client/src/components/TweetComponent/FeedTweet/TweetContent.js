import React from "react";
import styled from "styled-components";

const TweetContents = ({ tweet }) => {
  return (
    tweet && (
      <Wrapper>
        <Description>{tweet.status}</Description>
        {tweet.media.length > 0 && <Image src={tweet.media[0].url} />}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  padding: 10px 0px 0px 0px;
`;

const Description = styled.div`
  font-size: 18px;
  padding: 0px 10px 10px 0px;
`;

const Image = styled.img`
  max-height: 50vh;
  max-width: 700px;
  border-radius: 20px;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding: 10px 0px 0px 0px;
`;

export default TweetContents;

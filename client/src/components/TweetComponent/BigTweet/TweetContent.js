import React, { useContext } from "react";
import styled from "styled-components";
import moment from "moment";

const TweetContents = ({ singleTweet }) => {
  let hour = moment(singleTweet.timestamp).format("LT");
  let date = moment(singleTweet.timestamp).format("MMM D YYYY");
  const timestamp = `${hour} · ${date} · Critter web app`;

  return (
    singleTweet && (
      <Wrapper>
        <Description>{singleTweet.status}</Description>
        {singleTweet.media.length > 0 && (
          <Image src={singleTweet.media[0].url} />
        )}
        <Timestamp>{timestamp}</Timestamp>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  padding: 15px;
`;

const Description = styled.div`
  font-size: 22px;
  padding: 0px 0px 10px 0px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 30px;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding: 10px 0px 0px 0px;
`;

export default TweetContents;

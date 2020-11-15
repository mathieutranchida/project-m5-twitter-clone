import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TweetFeed from "../TweetComponent/TweetFeed";

const ProfileFeed = () => {
  const [getProfileFeed, setGetProfileFeed] = React.useState(null);

  useEffect(() => {
    fetch(`/api/treasurymog/feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGetProfileFeed(data);
      });
  }, []);

  let tweets = [];
  if (getProfileFeed) {
    tweets = Object.values(getProfileFeed.tweetsById);
  }

  return (
    getProfileFeed && (
      <Wrapper>
        {tweets
          .map((tweet, key) => {
            return <TweetFeed tweet={tweet} key={tweet.id} />;
          })
          .reverse()}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  margin-right: 1px solid grey;
`;

export default ProfileFeed;

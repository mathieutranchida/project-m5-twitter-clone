import { fromByteArray } from "ipaddr.js";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
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
  });

  let tweets = [];
  if (getProfileFeed) {
    tweets = Object.values(getProfileFeed.tweetsById);
  }

  return (
    getProfileFeed && (
      <Wrapper>
        {tweets.map((tweet, index) => {
          return <TweetFeed tweet={tweet} />;
        })}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div``;

export default ProfileFeed;

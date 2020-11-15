import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import TweetFeed from "../TweetComponent/TweetFeed";

const ProfileFeed = () => {
  const [getProfileFeed, setGetProfileFeed] = React.useState(null);

  let { profileId } = useParams();

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
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
        {tweets
          .map((tweet, index) => {
            return <TweetFeed tweet={tweet} />;
          })
          .reverse()}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div``;

export default ProfileFeed;

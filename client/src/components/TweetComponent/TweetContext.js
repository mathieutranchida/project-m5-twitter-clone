import React, { useEffect, useState } from "react";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [homefeed, setHomefeed] = React.useState(null);
  const [singleTweet, setSingleTweet] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);

  useEffect(() => {
    // Fetch for homefeed
    fetch(`/api/me/home-feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHomefeed(data);
      });

    // Fetch a single Tweet for development purpose
    fetch(`/api/tweet/:tweetId`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSingleTweet(data.tweet);
      });

    // Fetch the a user's profile's tweets
    fetch(`/api/:handle/feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserProfile(data);
      });
  }, []);

  console.log(singleTweet);

  return (
    <TweetContext.Provider
      value={{
        homefeed,
        singleTweet,
        userProfile,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

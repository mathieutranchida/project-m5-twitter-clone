import React, { useEffect, useState } from "react";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [homefeed, setHomefeed] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  const [toggleFeed, setToggleFeed] = useState(false);

  useEffect(() => {
    // Fetch for homefeed
    fetch(`/api/me/home-feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setHomefeed(data);
        setStatus("idle");
      })
      .catch(() => setStatus("error"));
  }, [toggleFeed]);

  useEffect(() => {
    // Fetch the a user's profile's tweets
    fetch(`/api/:handle/feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserProfile(data);
      });
  }, []);

  return (
    <TweetContext.Provider
      value={{
        homefeed,
        userProfile,
        status,
        toggleFeed,
        setToggleFeed,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

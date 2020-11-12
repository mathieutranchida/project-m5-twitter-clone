import React, { useEffect, useState } from "react";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [homefeed, setHomefeed] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  useEffect(() => {
    // Fetch for homefeed
    fetch(`/api/me/home-feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHomefeed(data);
        setStatus("idle");
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

  return (
    <TweetContext.Provider
      value={{
        homefeed,
        userProfile,
        status,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

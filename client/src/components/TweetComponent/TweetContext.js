import React, { useEffect, useState } from "react";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [homefeed, setHomefeed] = React.useState(null);
  const [devTweet, setDevTweet] = React.useState(null);

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
    fetch(`/api/tweet/1212689921057665024`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDevTweet(data.tweet);
      });
  }, []);

  return (
    <TweetContext.Provider
      value={{
        homefeed,
        devTweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

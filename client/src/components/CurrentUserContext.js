import React, { useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  const [homefeedTweetIds, setHomefeedTweetIds] = React.useState(null);
  const [devTweet, setDevTweet] = React.useState(null);

  // Fetch data for Profile
  useEffect(() => {
    fetch(`/api/me/profile`)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data.profile);

        setStatus("idle");
      });

    // Fetch for homefeed
    fetch(`/api/me/home-feed`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHomefeedTweetIds(data.tweetIds);
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
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
        homefeedTweetIds,
        devTweet,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

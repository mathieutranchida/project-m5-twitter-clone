import React, { useEffect, useState } from "react";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const [homefeed, setHomefeed] = React.useState(null);
  const [userProfile, setUserProfile] = React.useState(null);
  const [status, setStatus] = React.useState("loading");
  let [isLiked, setIsLiked] = React.useState(false);
  let [isRetweeted, setIsRetweeted] = React.useState(false);
  let [numOfLikes, setNumOfLikes] = React.useState();
  let [numOfRetweets, setNumOfRetweets] = React.useState();
  const [toggleFeed, setToggleFeed] = useState(false);

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

  const handleToggleLike = (tweetId) => {
    if (!isLiked) {
      setHomefeed({
        ...homefeed,
        tweetsById: {
          ...homefeed.tweetsById,
          [tweetId]: {
            ...homefeed.tweetsById[tweetId],
            numLikes: homefeed.tweetsById[tweetId].numLikes + 1,
          },
        },
      });
      setIsLiked(true);
    } else if (isLiked) {
      setHomefeed({
        ...homefeed,
        tweetsById: {
          ...homefeed.tweetsById,
          [tweetId]: {
            ...homefeed.tweetsById[tweetId],
            numLikes: homefeed.tweetsById[tweetId].numLikes - 1,
          },
        },
      });
      setIsLiked(false);
    }
  };

  const handleToggleRetweet = (tweetId) => {
    if (!isRetweeted) {
      setHomefeed({
        ...homefeed,
        tweetsById: {
          ...homefeed.tweetsById,
          [tweetId]: {
            ...homefeed.tweetsById[tweetId],
            numRetweets: homefeed.tweetsById[tweetId].numRetweets + 1,
          },
        },
      });
      setIsRetweeted(true);
    } else if (isRetweeted) {
      setHomefeed({
        ...homefeed,
        tweetsById: {
          ...homefeed.tweetsById,
          [tweetId]: {
            ...homefeed.tweetsById[tweetId],
            numRetweets: homefeed.tweetsById[tweetId].numRetweets - 1,
          },
        },
      });
      setIsRetweeted(false);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        homefeed,
        userProfile,
        status,
        numOfLikes,
        numOfRetweets,
        setNumOfLikes,
        setNumOfRetweets,
        isLiked,
        isRetweeted,
        setIsLiked,
        setIsRetweeted,
        handleToggleLike,
        handleToggleRetweet,
        toggleFeed,
        setToggleFeed,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

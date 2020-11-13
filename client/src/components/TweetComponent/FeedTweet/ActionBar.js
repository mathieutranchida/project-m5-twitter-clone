import React, { useContext } from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";

import Action from "./Action";
import { TweetContext } from "../TweetContext";

const IconStyle = {
  height: "22px",
  width: "20px",
};

const ActionBar = ({ tweet }) => {
  // const {
  //   isLiked,
  //   isRetweeted,
  //   numOfLikes,
  //   numOfRetweets,
  //   handleToggleLike,
  //   handleToggleRetweet,
  //   homefeed,
  // } = useContext(TweetContext);
  //const tweetId = tweet.id;

  const [likeInfo, setLikeInfo] = React.useState(
    tweet
      ? {
          isLiked: tweet.isLiked,
          numLikes: tweet.numLikes,
        }
      : null
  );

  console.log(tweet);

  const handleLike = () => {
    fetch(`/api/tweet/${tweet.id}/like`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ like: !likeInfo.isLiked }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        if (likeInfo.isLiked) {
          setLikeInfo({ isLiked: false, numLikes: likeInfo.numLikes - 1 });
        } else {
          setLikeInfo({ isLiked: true, numLikes: likeInfo.numLikes + 1 });
        }
      });
  };

  return (
    <>
      {likeInfo ? (
        <Wrapper>
          <ActionDiv>
            <Action color="rgb(27, 149, 224)" size={40}>
              <FiMessageCircle style={IconStyle} />
            </Action>
          </ActionDiv>
          <ActionDiv>
            <Stats>{tweet.numRetweets > 0 && tweet.numRetweets}</Stats>
            <Action
              color="rgb(23, 191, 99)"
              size={40}
              onClick={(ev) => {
                ev.stopPropagation();
                // handleToggleRetweet(tweet.id);
              }}
            >
              <FiRepeat
                style={IconStyle}
                // color={isRetweeted ? "rgb(23, 191,99)" : undefined}
              />
            </Action>
          </ActionDiv>
          <ActionDiv
            onClick={(ev) => {
              ev.stopPropagation();
              console.log("clicked");
              handleLike();
            }}
          >
            <Stats>{likeInfo.numLikes > 0 && likeInfo.numLikes}</Stats>
            <Action color="rgb(224, 36, 94)" size={40}>
              <FiHeart style={IconStyle} />
            </Action>
          </ActionDiv>
          <ActionDiv>
            <Action color="rgb(27, 149, 224)" size={40}>
              <FiUpload style={IconStyle} />
            </Action>
          </ActionDiv>
        </Wrapper>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 48px;
  margin-right: 1px solid grey;
`;

const ActionDiv = styled.div`
  all: unset;
  display: flex;
  align-items: center;
`;

const Stats = styled.div`
  margin-right: 10px;
`;

export default ActionBar;

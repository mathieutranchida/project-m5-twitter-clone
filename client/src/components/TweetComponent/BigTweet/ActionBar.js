import React from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";

import Action from "../FeedTweet/Action";
import { TweetContext } from "../TweetContext";

const IconStyle = {
  height: "22px",
  width: "20px",
};

const ActionBar = ({ singleTweet }) => {
  const [likeInfo, setLikeInfo] = React.useState(
    singleTweet
      ? {
          isLiked: singleTweet.isLiked,
          numLikes: singleTweet.numLikes,
        }
      : null
  );

  const handleLike = () => {
    fetch(`/api/tweet/${singleTweet.id}/like`, {
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

  const [retweetInfo, setRetweetInfo] = React.useState(
    singleTweet
      ? {
          isRetweeted: singleTweet.isRetweeted,
          numRetweets: singleTweet.numRetweets,
        }
      : null
  );

  const handleRetweet = () => {
    fetch(`/api/tweet/${singleTweet.id}/retweet`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ retweet: !retweetInfo.isRetweeted }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        if (retweetInfo.isRetweeted) {
          setRetweetInfo({
            isRetweeted: false,
            numRetweets: retweetInfo.numRetweets - 1,
          });
        } else {
          setRetweetInfo({
            isRetweeted: true,
            numRetweets: retweetInfo.numRetweets + 1,
          });
        }
      });
  };

  return (
    <Wrapper>
      <ActionDiv>
        <Action color="rgb(27, 149, 224)" size={40}>
          <FiMessageCircle style={IconStyle} />
        </Action>
      </ActionDiv>
      <ActionDiv
        onClick={(ev) => {
          ev.stopPropagation();
          handleRetweet();
        }}
      >
        <Stats>{retweetInfo.numRetweets > 0 && retweetInfo.numRetweets}</Stats>
        <Action color="rgb(23, 191, 99)" size={40}>
          <FiRepeat
            style={IconStyle}
            color={retweetInfo.isRetweeted ? "rgb(23, 191,99)" : undefined}
          />
        </Action>
      </ActionDiv>
      <ActionDiv
        onClick={(ev) => {
          ev.stopPropagation();
          handleLike();
        }}
      >
        <Stats>{likeInfo.numLikes > 0 && likeInfo.numLikes}</Stats>
        <Action color="rgb(224, 36, 94)" size={40}>
          <FiHeart
            style={IconStyle}
            color={likeInfo.isLiked ? "red" : undefined}
          />
        </Action>
      </ActionDiv>
      <ActionDiv>
        <Action color="rgb(27, 149, 224)" size={40}>
          <FiUpload style={IconStyle} />
        </Action>
      </ActionDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  height: 48px;
`;

const ActionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Stats = styled.div`
  margin-right: 10px;
`;

export default ActionBar;

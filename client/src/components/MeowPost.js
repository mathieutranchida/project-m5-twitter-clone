import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../constants";

import { CurrentUserContext } from "./CurrentUserContext";
import { TweetContext } from "./TweetComponent/TweetContext";

const MeowPost = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { toggleFeed, setToggleFeed } = useContext(TweetContext);
  const [charCount, setCharCount] = useState(280);
  const [tweetContent, setTweetContent] = useState("");

  const handleCharCount = (ev) => {
    // setCharCount(charCount - ev.target.length);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch(`/api/tweet`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ status: tweetContent }),
    })
      .then((res) => {
        console.log(res);
        setToggleFeed(!toggleFeed);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <Wrapper>
      {currentUser && <Avatar src={currentUser.avatarSrc} />}
      <TextWrapper onSubmit={handleSubmit}>
        <TextArea
          className="message"
          placeholder={"What's happening?"}
          value={tweetContent}
          onChange={(ev) => {
            setTweetContent(ev.target.value);
          }}
        />
        <BottomWrapper>
          <WordCounter>280</WordCounter>
          <SendBtn type="submit">Meow</SendBtn>
        </BottomWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-top: 1px grey solid;
  border-bottom: 10px grey solid;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 0px 10px;
`;

const TextWrapper = styled.form``;

const TextArea = styled.textarea`
  width: 685px;
  height: 150px;
  border: none;
  outline: none;
  font-size: 15pt;
  padding-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const BottomWrapper = styled.div`
  text-align: right;
`;

const WordCounter = styled.label`
  margin-right: 20px;
  font-style: italic;
  color: grey;
  font-size: 10pt;
`;

const SendBtn = styled.button`
  padding: 10px 15px;
  font-size: 15pt;
  font-weight: bold;
  border-radius: 500px;
  border: none;
  background-color: ${COLORS.primary};
  color: white;
`;

export default MeowPost;

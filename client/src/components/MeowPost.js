import React, { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import COLORS from "../constants";

import { CurrentUserContext } from "./CurrentUserContext";
import { TweetContext } from "./TweetComponent/TweetContext";
import ErrorWindowPost from "./ErrorWindowPost";

const MeowPost = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { toggleFeed, setToggleFeed } = useContext(TweetContext);
  const [charCount, setCharCount] = useState(280);
  const [tweetContent, setTweetContent] = useState("");
  const [status, setStatus] = useState(null);
  const inputRef = useRef(null);

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
        setToggleFeed(!toggleFeed);
        inputRef.current.value = "";
      })
      .catch((res) => {
        setStatus("error");
      });
  };

  if (status === "error") {
    return <ErrorWindowPost />;
  }

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
            setCharCount(280 - ev.target.value.length);
          }}
          ref={inputRef}
        />
        <BottomWrapper>
          {charCount > 55 && (
            <WordCounterGrey>Characters left: {charCount}</WordCounterGrey>
          )}
          {charCount <= 55 && charCount > 0 && (
            <WordCounterYellow color="yellow">
              Characters left: {charCount}
            </WordCounterYellow>
          )}
          {charCount <= 0 && (
            <WordCounterRed color="red">
              Characters left: {charCount}
            </WordCounterRed>
          )}
          <SendBtn
            disabled={charCount === 280 || charCount < 0 ? true : false}
            type="submit"
          >
            Meow
          </SendBtn>
          {/* {charCount === 280 && <SendBtnDsb type="submit">Meow</SendBtnDsb>}
          {charCount < 280 && <SendBtn type="submit">Meow</SendBtn>} */}
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

const WordCounterGrey = styled.label`
  margin-right: 20px;
  font-style: italic;
  font-size: 10pt;
  color: grey;
`;

const WordCounterYellow = styled.label`
  margin-right: 20px;
  font-style: italic;
  font-size: 10pt;
  color: orange;
`;

const WordCounterRed = styled.label`
  margin-right: 20px;
  font-style: italic;
  font-size: 10pt;
  color: red;
`;

const SendBtn = styled.button`
  padding: 10px 15px;
  font-size: 15pt;
  font-weight: bold;
  border-radius: 500px;
  border: none;
  background-color: ${COLORS.primary};
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: grey;
  }
`;

export default MeowPost;

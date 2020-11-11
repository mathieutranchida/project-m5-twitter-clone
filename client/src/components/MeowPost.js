import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../constants";

import { CurrentUserContext } from "./CurrentUserContext";

const MeowPost = () => {
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetch("`/api/tweet`", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  }, []);

  return (
    <Wrapper>
      <Avatar src={currentUser.avatarSrc} />
      <TextWrapper>
        <TextArea className="message" placeholder={"What's happening?"} />
        <BottomWrapper>
          <WordCounter>280</WordCounter>
          <SendBtn>Meow</SendBtn>
        </BottomWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border-top: 1px grey solid;
  border-right: 1px grey solid;
  border-bottom: 10px grey solid;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 0px 10px;
`;

const TextWrapper = styled.div``;

const TextArea = styled.textarea`
  width: 750px;
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

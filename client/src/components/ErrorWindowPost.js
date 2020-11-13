import React from "react";
import styled from "styled-components";

import { FaBomb } from "react-icons/fa";

const IconStyle = {
  height: "50px",
  width: "50px",
};

const ErrorWindowPost = () => {
  return (
    <Wrapper>
      <FaBomb style={IconStyle} />
      <TextWrapper>
        <Title>An unknown error has occured.</Title>
        <Text>
          Please try sending your tweet again, or{" "}
          <a href="/#">contact support</a> if the problem persists.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 200px 0px;
  width: 800px;
`;

const TextWrapper = styled.div`
  padding-top: 30px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

export default ErrorWindowPost;

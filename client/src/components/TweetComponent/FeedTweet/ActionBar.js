import React, { useContext } from "react";
import styled from "styled-components";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";

import { TweetContext } from "../TweetContext";

const IconStyle = {
  height: "25px",
  width: "25px",
};

const ActionBar = () => {
  return (
    <Wrapper>
      <FiMessageCircle style={IconStyle} />
      <FiRepeat style={IconStyle} />
      <FiHeart style={IconStyle} />
      <FiUpload style={IconStyle} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export default ActionBar;

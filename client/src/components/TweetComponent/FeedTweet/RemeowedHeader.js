import React, { useContext } from "react";
import styled from "styled-components";

import { FiRepeat } from "react-icons/fi";

const iconStyle = {
  height: "15px",
  width: "15px",
  color: "grey",
};

const RemeowedHeader = ({ tweet }) => {
  console.log(tweet.retweetFrom);
  return (
    <Wrapper>
      <FiRepeat style={iconStyle} />
      <Text>{tweet.retweetFrom.displayName}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Text = styled.div`
  font-size: 11pt;
  color: grey;
`;

export default RemeowedHeader;

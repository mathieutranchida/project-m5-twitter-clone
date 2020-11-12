import React, { useContext } from "react";
import styled from "styled-components";

import { FiRepeat } from "react-icons/fi";

const iconStyle = {
  height: "15px",
  width: "15px",
  color: "grey",
};

const RemeowedHeader = ({ tweet }) => {
  return (
    <Wrapper>
      <FiRepeat style={iconStyle} />
      <Text>{tweet.retweetFrom.displayName}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px 0px 25px;
`;

const Text = styled.div`
  font-size: 11pt;
  color: grey;
  margin-left: 10px;
`;

export default RemeowedHeader;

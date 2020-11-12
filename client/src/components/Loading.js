import React, { useContext } from "react";
import styled from "styled-components";

import { FiSun } from "react-icons/fi";

const IconStyle = {
  height: "50px",
  width: "50px",
  paddingRight: "15px",
};

const spinTransition = {
  loop: "Infinity",
  duration: 1,
  ease: "linear",
};

const Loading = () => {
  return (
    <Wrapper>
      <FiSun
        style={IconStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Loading;

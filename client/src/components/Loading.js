import React, { useContext } from "react";
import styled from "styled-components";

import { FiSun } from "react-icons/fi";

const Loading = () => {
  return (
    <Wrapper>
      <StyledFiSun />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledFiSun = styled(FiSun)`
  height: 50px;
  width: 50px;
  animation-duration: 1500ms;
  animation-name: spin;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;

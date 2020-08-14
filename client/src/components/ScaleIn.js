import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: `scale(1)`,
    from: {
      transform: `scale(0)`,
    },
    config: {
      tension: 100,
      friction: 10,
    },
  });

  return <Scale style={style}>{children}</Scale>;
};

const Scale = styled(animated.div)`
  position: absolute;
  top: -2px;
  right: -2px;
`;

export default ScaleIn;

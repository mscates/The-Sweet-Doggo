import React from "react";
import styled from "styled-components";
import Hover from "./Hover";

const HoverContainer = styled.div`
  position: relative;
`;

const ToolTipStyle = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 80px;
  left: -25px;
  top: -30px;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
  font-size: 14px;
`;

const ToolTip = ({ text, children }) => {
  return (
    <Hover>
      {(hovering) => (
        <HoverContainer>
          {hovering === true && <ToolTipStyle>{text}</ToolTipStyle>}
          {children}
        </HoverContainer>
      )}
    </Hover>
  );
};

export default ToolTip;
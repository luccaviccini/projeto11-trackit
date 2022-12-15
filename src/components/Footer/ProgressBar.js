import { CircularProgressbar } from "react-circular-progressbar";


import React from 'react';

import styled from "styled-components";

function ProgressBar(props) {
  return (
    <StyledProgressBar>
      <CircularProgressbar
        className="myCircularProgressBar"
        value={props.percentage}
        text={"Hoje"}
        background
        backgroundPadding={6}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `white`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path

            transformOrigin: "center center",
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "transparent",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "#fff",
            // Text size
            fontSize: "18px",
            // Text font
            fontFamily: "Lexend Deca, sans-serif",
            // text position
            dominantBaseline: "middle",
            textAnchor: "middle",
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "#52B6FF",
          },
        }}
      />
    </StyledProgressBar>
  );
}

export default ProgressBar;

const StyledProgressBar = styled.div`
  width: 91px;
  height: 91px;
  font-family: "Lexend Deca", sans-serif;
  margin-bottom: 40px;
`;
        
  
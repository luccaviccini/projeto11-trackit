import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

import ProgressBar from "../Footer/ProgressBar"




function Footer() {
  const percentage = 50;
  return (
    <StyledFooter>
      <div>
        <Link to="/habitos">Habitos</Link>
      </div>
      <ProgressBar percentage={percentage} />
      <div>
        <Link to="/historico">Histórico</Link>
      </div>
    </StyledFooter>
  );
}

export default Footer;

export const StyledFooter = styled.div`
  max-width: inherit;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background-color: white;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      color: #52b6ff;
      font-size: 17.98px;
    }
    :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }
  
`;


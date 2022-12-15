import React from 'react';
import styled from "styled-components";

// import { Container } from './styles';

function Header() {
  return (
    <StyledHeader>
      <h1>Track It</h1>
      <img
        src="https://assets-prd.ignimgs.com/2022/08/14/avatar-generations-button-1-1660457611374.jpg"
        alt="user"
      />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  max-width: inherit;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;

  h1 {
    font-family: "Playball";
    font-size: 38.982px;
    color: white;
  }

  img {
    width: 51px;
    height: 51px;
    clip-path: circle();
  }
`;


import React from "react";
import {Container} from "../../common/styles";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function HomePage() {
  

  return (
    <Container>
        <StyledHomePage>
          <img src={Logo} alt="Logo"></img>
          <form>
            <input type="email" placeholder="E-mail" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Entrar</button>
          </form>
          <Link to="/cadastro">
          <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
        </StyledHomePage>      
    </Container>
  );
}

export default HomePage;

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 190px;
    margin-top: 68px;
    margin-bottom: 32.62px;
  }

  button {
    height: 45px;
    width: 303px;
    margin-bottom: 25px;
  }

  p {
    color: #52b6ff;
    font-size: 13.98px;
    :hover {
      cursor: pointer;
      text-decoration-line: underline;
    }
  }
`;

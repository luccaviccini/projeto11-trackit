import React from 'react';
import {Container} from "../../common/styles";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";


function RegisterPage() {
  return (
    <Container>
      <StyledRegisterPage>
        <img src={Logo} alt="Logo"></img>
        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <input type="text" placeholder="Nome" required />
          <input type="url" placeholder="Foto" required />
          <button type="submit">Cadastrar</button>
        </form>
        
        <p>Já tem uma conta? Faça login!</p>
      </StyledRegisterPage>
    </Container>
  );
}

export default RegisterPage;

export const StyledRegisterPage = styled.div`
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

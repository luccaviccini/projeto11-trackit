
import styled from 'styled-components';

export const Container = styled.div`
  max-width: inherit;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  * {
    box-sizing: border-box;
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background: #52b6ff;
    border-radius: 4.63636px;
    font-size: 20.98px;
    color: #ffffff;
    border: none;
    :disabled {
      background: rgba(82, 182, 255, 0.5);
    }
    :hover {
      cursor: pointer;
    }
  }

  a{
    text-decoration: none;
  }

  input {
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 19.98px;
    :disabled {
      background: #f2f2f2;
    }
    ::placeholder {
      color: #dbdbdb;
    }
  }
`;


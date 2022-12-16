import React from "react";
import styled from "styled-components";

function AddHabit() {
  return (
    <StyledAddHabits>
      <input type="text" placeholder="nome do hábito"></input>
      <button className="weekdayButton">S</button>
      <button className="weekdayButton">T</button>
      <button className="weekdayButton">Q</button>
      <button className="weekdayButton">Q</button>
      <button className="weekdayButton">S</button>
      <button className="weekdayButton">S</button>
      <button className="weekdayButton">D</button>
      <StyledButtonsContainer>
        <button className="cancelButton">Cancelar</button>
        <button className="saveButton">Salvar</button>
      </StyledButtonsContainer>
    </StyledAddHabits>
  );
}

export default AddHabit;

const StyledAddHabits = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 20px;
  padding: 18px 18px 15px 19px;
  background: #ffffff;
  border-radius: 5px;
  input {
    width: 100%;
    height: 45px;
    padding: 9px 0 11px 11px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    ::placeholder {
      font-size: 19.98px;
      color: #dbdbdb;
    }
  }

  .weekdayButton {
    width: 30px;
    height: 30px;
    margin-top: 8px;
    margin-right: 4px;
    background-color: white;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #dbdbdb;
    font-size: 19.98px;
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledButtonsContainer = styled.div`
  height: 64px;
  display: flex;
  align-items: end;
  justify-content: end;
  

  button {
    width: 84px;
    height: 35px;
    font-size: 15.98px;
    border: none;
  }
  .cancelButton {
    color: #52b6ff;
    background: white;
    :disabled {
      color: rgba(82, 182, 255, 0.5);
    }
  }
  .saveButton {
    margin-left: 23px;
    background: #52b6ff;
    border-radius: 4.63636px;
    color: white;
    :disabled {
      background: rgba(82, 182, 255, 0.5);
    }
  }
`;

import React from 'react';
import { Container } from "../../common/styles";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


export function HabitsPage() {
  return (
    <Container style={{ backgroundColor: "#f2f2f2" }}>
      <StyledHabitsPage>
        <Header />
        <StyledAddHabits>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </StyledAddHabits>
        <StyledNoHabitTxt>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </StyledNoHabitTxt>

        <Footer />
      </StyledHabitsPage>
    </Container>
  );
}



const StyledHabitsPage = styled.div`
  max-width: inherit;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0px;
  padding: 0px 18px;
  
 

`
const StyledAddHabits = styled.div`
  max-width: inherit;
  width: 100vw;
  padding: inherit;
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #126ba5;
    font-size: 22.98px;
  }

  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    border-radius: 4.63636px;
    color: white;
    font-size: 26.98px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      cursor: pointer;
    }
    padding-top: 0px;
    
  }
`;

const StyledNoHabitTxt = styled.div`
  margin-top: 28px;
  font-size: 17.98px;
  line-height: 22px;
  color: #666666;
`;

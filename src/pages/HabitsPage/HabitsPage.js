import React from 'react';
import Container from "../../common/styles";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";


function HabitsPage() {
  return (
    <Container style={{ backgroundColor: "#E5E5E5" }}>
      <StyledHabitsPage>
        <Header />
        <Footer />
      </StyledHabitsPage>
    </Container>
  );
}

export default HabitsPage;

export const StyledHabitsPage = styled.div`
  max-width: inherit;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255,255,0,0.8);

`
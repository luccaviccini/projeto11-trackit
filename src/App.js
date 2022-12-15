//import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";




function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StyledAppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
        
      </StyledAppContainer>
    </BrowserRouter>
  );
}

export default App;

const StyledAppContainer = styled.div`
  max-width: 414px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

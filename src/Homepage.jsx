import React from "react";
import Home from "./home";
import Sidebar from "./components/sidebar";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .subcontainer {
    display: flex;
    min-width: 1440px;
    max-width: 1540px;
  }
`;
const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainContainer>
        <div className="subcontainer">
          <Home />
        </div>
      </MainContainer>
    </div>
  );
};

export default HomePage;

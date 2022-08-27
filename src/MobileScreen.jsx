import React from "react";
import Coming from "./assets/Coming.gif";
import styled from "styled-components";
import Biscuit from "./assets/Biscuit.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const MainContainerHeader = styled.div`
  margin-top: 16px;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  color: #141522;
`;
const MainContainerHeader1 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #54577a;
`;
const MainContainerHeader2 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-top: 42px;
  color: #546fff;
  cursor: pointer;
`;
const MainContainerHeader3 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #54577a;
  margin-top: 120px;
`;
const MobileScreen = () => {
  return (
    <MainContainer>
      <img src={Coming} />
      <img src={Biscuit} style={{ marginTop: "24px" }} />
      <MainContainerHeader1 style={{ marginTop: "12px" }}>
        AI bot provides one-stop learning
      </MainContainerHeader1>
      <MainContainerHeader1>solution for product folks</MainContainerHeader1>
      <a href="https://jemi.so/_biscuit">
        <MainContainerHeader2>Learn more</MainContainerHeader2>
      </a>
      <MainContainerHeader3>
        Coming soon for android & IOS.
      </MainContainerHeader3>
      <MainContainerHeader3 style={{ marginTop: "4px" }}>
        Try web version.
      </MainContainerHeader3>
    </MainContainer>
  );
};

export default MobileScreen;

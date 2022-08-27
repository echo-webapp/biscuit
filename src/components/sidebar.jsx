import React from "react";
import styled from "styled-components";
import Book_square from "../assets/svgs/book_square";
import Notion from "./../assets/svgs/Notion";
import Slack from "./../assets/svgs/Slack";
import Microsoft from "./../assets/svgs/Microsoft";
import Miro from "./../assets/svgs/Miro";
import Twitter from "./../assets/svgs/Twitter";
import Chrome from "./../assets/svgs/Chrome";
import Likedin from "./../assets/svgs/Linkedin";
import Notif from "./../assets/svgs/Notif";
import Profil from "./../assets/images/Profil.png";
const MainContainer = styled.div`
  height: 100vh;
  width: 96px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
  padding-bottom: 48px;
  position: fixed;
  .subContainer1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .subContainer2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  @media only screen and (max-width: 1500px) {
    width: 72px;
    .image {
      width: 40px;
    }
  }
`;
const sidebar = () => {
  return (
    <MainContainer>
      <div className="subContainer1">
        <Book_square />
        <a href="https://www.notion.so/" target="_blank" l>
          <Notion />
        </a>
        <a href="https://slack.com/" target="_blank" l>
          <Slack />
        </a>
        <a
          href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software"
          target="_blank"
        >
          <Microsoft />
        </a>
        <a href="https://miro.com/" target="_blank" l>
          <Miro />
        </a>
        <a href="https://twitter.com/" target="_blank" l>
          <Twitter />
        </a>
        <a href="https://www.google.com/" target="_blank" l>
          <Chrome />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" l>
          <Likedin />
        </a>
      </div>
      <div className="subContainer2">
        <Notif />
        <img className="image" src={Profil} />
      </div>
    </MainContainer>
  );
};

export default sidebar;

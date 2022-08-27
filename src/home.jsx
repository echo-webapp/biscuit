import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchbar";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import Testing from "./components/testing";
import Courses from "./components/Courses";
import Community from "./components/community";
import { useLocation, useHistory } from "react-router";
import Price from "./components/Price";
import Challenges from "./components/challenges";
import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .watch {
    width: 155px;
    height: 36px;
    background: #546fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in all 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
const Home = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [selected, setselected] = useState("feed");
  const [header, setHeader] = useState("Let’s build better products.");
  const [display, setdisplay] = useState(null);
  const [keyword, setKeyword] = useState("feed");

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/home/feed") {
      setselected("feed");
      setdisplay(<Feed />);
      return;
    }
    if (location.pathname === "/home/courses") {
      setselected("courses");
      setdisplay(<Courses />);
      return;
    }
    if (location.pathname === "/home/challenges") {
      setselected("challenges");
      setdisplay(<Challenges />);
      return;
    }
    if (location.pathname === "/home/casestudy") {
      setselected("casestudy");
      setdisplay(<Feed />);
      return;
    }
    if (location.pathname === "/home/news") {
      setselected("news");
      setdisplay(<Feed />);
      return;
    }
    if (location.pathname === "/home/testing") {
      setselected("testing");
      setdisplay(<Testing />);
      return;
    }
    if (location.pathname === "/home/community") {
      setselected("community");
      setdisplay(<Community />);
      return;
    }
  }, [location.pathname]);

  useEffect(() => {
    switch (selected) {
      case "feed":
        setdisplay(<Feed setOpen={setOpen} />);
        break;
      case "courses":
        setdisplay(<Courses />);
        break;
      case "challenges":
        setdisplay(<Challenges />);
        break;
      case "casestudy":
        setdisplay(<Feed setOpen={setOpen} />);
        break;
      case "news":
        setdisplay(<Feed setOpen={setOpen} />);
        break;
      case "testing":
        setdisplay(<Testing setOpen={setOpen} />);
        break;
      case "community":
        setdisplay(<Community />);
        break;
    }
  }, [selected]);
  useEffect(() => {
    switch (selected) {
      case "feed":
        setHeader("Let’s build better products.");
        break;
      case "courses":
        setHeader("Upskill yourself with munching Biscuit bits");
        break;
      case "challenges":
        setHeader("Solve real world problems");
        break;
      case "casestudy":
        setHeader("Let’s build better products.");
        break;
      case "shorts":
        setHeader("Let’s build better products.");
        break;
      case "testing":
        setHeader("Understand your customers");
        break;
      case "community":
        setHeader("Start networking!");
        break;
    }
  }, [selected]);

  return (
    <>
      {open && <Price open={open} setOpen={setOpen} />}
      <div
        className="flex flex-col mt-12  items-center "
        style={{ width: "1440px" }}
      >
        <MainContainer>
          <div className="text-2xl text-center text-color font-bold w-full">
            {header}
          </div>
          <div
            className="watch"
            onClick={() => {
              history.push("/");
            }}
          >
            Ask Biscuit
          </div>
        </MainContainer>

        {/* <div className="mt-12">
          <SearchBar />
        </div> */}
        <div className="mt-12">
          <Navbar selected={selected} setselected={setselected} />
        </div>
        {display}
      </div>
    </>
  );
};

export default Home;

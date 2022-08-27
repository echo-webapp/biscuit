import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchbar";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import Testing from "./components/testing";
import Courses from "./components/Courses";
import Community from "./components/community";
import { useLocation } from "react-router";
import Price from "./components/Price";
import Challenges from "./components/challenges";

const Home = () => {
  const [open, setOpen] = useState(true);

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
        setdisplay(<Feed />);
        break;
      case "courses":
        setdisplay(<Courses />);
        break;
      case "challenges":
        setdisplay(<Challenges />);
        break;
      case "casestudy":
        setdisplay(<Feed />);
        break;
      case "news":
        setdisplay(<Feed />);
        break;
      case "testing":
        setdisplay(<Testing />);
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
        <div className="text-2xl text-center text-color font-bold w-full">
          {header}
        </div>
        <div className="mt-12">
          <SearchBar />
        </div>
        <div className="mt-12">
          <Navbar selected={selected} setselected={setselected} />
        </div>
        {display}
      </div>
    </>
  );
};

export default Home;

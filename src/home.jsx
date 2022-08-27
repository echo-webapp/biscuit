import React, { useEffect, useState } from "react";
import SearchBar from "./components/searchbar";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import Testing from "./components/testing";
import Courses from "./components/Courses";
import Community from "./components/community";
import InnerPage from "./components/innerpage";
const Home = () => {
  const [selected, setselected] = useState("feed");
  const [header, setHeader] = useState("Let’s build better products.");
  const [display, setdisplay] = useState(null);

  useEffect(() => {
    switch (selected) {
      case "feed":
        setdisplay(<Feed />);
        break;
      case "courses":
        setdisplay(<Courses />);
        break;
      case "challenges":
        setdisplay(<InnerPage />);
        break;
      case "casestudy":
        setdisplay(<Feed />);
        break;
      case "shorts":
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
  );
};

export default Home;

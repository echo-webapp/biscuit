import React from "react";
import { Eye } from "../assets/svgs/eye";
import { Share } from "../assets/svgs/share";
import { Bookmark } from "../assets/svgs/bookmark";
import { ProTag } from "../assets/svgs/protag";
import image1 from "../assets/images/Image11.png";
import image2 from "../assets/images/Image12.png";
import image3 from "../assets/images/Image13.png";
import image11 from "../assets/images/Image111.png";
import image22 from "../assets/images/Image112.png";
import Slider from "react-slick";
import styled from "styled-components";
import Clock from "./../assets/svgs/Clock";
import Rec1 from "../assets/images/Rectangle19.png";
import Rec2 from "../assets/images/Rectangle20.png";
import Rec3 from "../assets/images/Rectangle22.png";
import Rec4 from "../assets/images/Rectangle23.png";
import Rec5 from "../assets/images/Rectangle24.png";

import { generateSettings } from "./utils";

const feeds_arr = [
  {
    image: image1,
    heading: "Product Management 101",
    heading1: "Fundamentals",
    l1: "Understand the market and problems",
    l2: "Use market knowledge to build and sell products people want to buy...",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image2,
    heading: "Build and Leverage User Exp...",
    heading1: "UX UI Design",
    title: "Problem solving",
    l1: "Collaborate on developing and refining user personas",
    l2: " Analyze challenges and pain points...",
    views: "59",
    share: "2",
  },
  {
    image: image3,
    heading: "Determine Market Value",
    heading1: "Pricing Strategy",
    title: "Product",
    l1: "Understand the market and problems",
    l2: "Use market knowledge to build and sell products people want to buy...",
    views: "59",
    share: "2",
    pro: true,
  },
  {
    image: image1,
    heading: "Product Management 101",
    heading1: "Fundamentals",
    l1: "Understand the market and problems",
    l2: "Use market knowledge to build and sell products people want to buy...",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image2,
    heading: "Build and Leverage User Exp...",
    heading1: "UX UI Design",
    title: "Problem solving",
    l1: "Collaborate on developing and refining user personas",
    l2: " Analyze challenges and pain points...",
    views: "59",
    share: "2",
  },
  {
    image: image3,
    heading: "Determine Market Value",
    heading1: "Pricing Strategy",
    title: "Product",
    l1: "Understand the market and problems",
    l2: "Use market knowledge to build and sell products people want to buy...",
    views: "59",
    share: "2",
    pro: true,
  },
  {
    image: image1,
    heading: "Product Management 101",
    heading1: "Fundamentals",
    l1: "Understand the market and problems",
    l2: "Use market knowledge to build and sell products people want to buy...",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image2,
    heading: "Build and Leverage User Exp...",
    heading1: "UX UI Design",
    title: "Problem solving",
    l1: "Collaborate on developing and refining user personas",
    l2: " Analyze challenges and pain points...",
    views: "59",
    share: "2",
  },
  {
    image: image3,
    heading: "Determine Market Value",
    heading1: "Pricing Strategy",
    title: "Product",
    l1: "Understand the market and problems",
    l2: "Use market knowledge to build and sell products people want to buy...",
    views: "59",
    share: "2",
    pro: true,
  },
];
export const MainSlider = styled.div`
  margin: 0 40px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  max-width: 1240px;
  margin-top: -20px;
  padding: 22px 0 0;
  @media only screen and (max-width: 500px) {
    max-width: 85%;
    margin: auto;
    padding: 0;
  }
`;
export const MainContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  max-width: 308px;
  min-height: 512px;
  margin: 20px;
  position: relative;
  padding: 22px;
  display: flex;

  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;

    color: #141522;
  }
  .mainImage {
    width: 260px;
  }
  .heading {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #141522;
    margin-top: 23px;
  }
  .heading1 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-top: 4px;
    color: #54577a;
  }
  .heading2 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-top: 4px;
    color: #54577a;
    padding-left: 16px;
  }
  .divwatch {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .watch {
    padding: 10px 20px;
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
  }
`;

export const MainContainer1 = styled.div`
  position: relative;
  padding: 107px;
  .header {
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin-left: 180px;
    color: #141522;
  }
  .headerImg1 {
    width: 1200px;
    display: flex;
    justify-content: flex-start;
    margin-top: 92px;
    margin-left: 180px;
  }
  .headerImg2 {
    width: 1200px;
    display: flex;
    margin-top: 82px;
    margin-left: 180px;
  }
  .imgtext {
    position: absolute;
    bottom: 770px;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 35px;
    color: #ffffff;
  }
  .imgtext1 {
    position: absolute;
    bottom: 490px;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 35px;
    color: white;
  }
  .subconatiner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 99px;
  }
  .conatiner {
    width: 355px;
    height: 280px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    margin-right: 32px;
  }
  .subconatinertext1 {
    margin-top: 12px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #141522;
  }
  .subconatinertext2 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #54577a;
  }
  .subconatinertext3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #141522;
  }
`;

const Courses = () => {
  const [settings, setSettings] = React.useState(
    generateSettings(window.innerWidth)
  );

  const handleResize = () => {
    setSettings(generateSettings(window.innerWidth));
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <MainContainer1>
      <div className="header" style={{ top: "56px", left: "108px" }}>
        Trending Now
      </div>
      <MainSlider>
        <Slider {...settings} style={{ width: "80%", margin: "auto" }}>
          {feeds_arr.map((item) => {
            return (
              <MainContainer className="cardHover cardHoverTransition">
                <img src={item.image} className="mainImage" alt="no image" />
                <div className="heading">{item.heading}</div>
                <div className="heading1">{item.heading1}</div>
                <div className="heading">Overview</div>
                <div className="heading2">
                  <li>{item.l1}</li>
                  <li> {item.l2}</li>
                </div>
                <div className="divwatch">
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Clock />
                    <div>12 minutes</div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=yd8TFgaXItE"
                    target="_blank"
                  >
                    <div className="watch">Watch now</div>
                  </a>
                </div>
              </MainContainer>
            );
          })}
        </Slider>
      </MainSlider>
      <div className="header" style={{ marginTop: "36px" }}>
        Top Categories
      </div>
      <div className="headerImg1 gap-8">
        <div style={{ postion: "relative" }}>
          <img src={Rec1} style={{ width: "80%" }} />
          <div
            className="imgtext"
            style={{ position: "absolute", left: "305px" }}
          >
            UX UI DESIGN
          </div>
        </div>
        <div style={{ postion: "relative" }}>
          <img src={Rec2} style={{ width: "80%" }} />
          <div
            className="imgtext"
            style={{ position: "absolute", left: "1000px" }}
          >
            GROWTH STRATEGY
          </div>
        </div>
      </div>
      <div className="headerImg2">
        <div style={{ postion: "relative", width: "max-content" }}>
          <img src={Rec3} style={{ width: "75%" }} />
          <div
            className="imgtext1"
            style={{ position: "absolute", left: "305px" }}
          >
            PRICING
          </div>
        </div>
        <div style={{ postion: "relative" }}>
          <img src={Rec4} style={{ width: "75%" }} />
          <div
            className="imgtext1"
            style={{ position: "absolute", left: "698px" }}
          >
            LAUNCH STRATEGY
          </div>
        </div>
        <div style={{ postion: "relative" }}>
          <img src={Rec5} style={{ width: "75%" }} />
          <div
            className="imgtext1"
            style={{ position: "absolute", left: "1110px" }}
          >
            TECH SKILLS
          </div>
        </div>
      </div>
      <div className="header" style={{ marginTop: "36px" }}>
        Upcoming Content
      </div>
      <div className="subconatiner">
        <div style={{ display: "flex", marginLeft: "180px" }}>
          <div className="conatiner cardHover cardHoverTransition">
            <img src={image22} />
            <div className="subconatinertext1">
              Identify right product strategy
            </div>
            <div className="subconatinertext2">Decision-making</div>
          </div>
          <div className="conatiner cardHover cardHoverTransition">
            <img src={image11} />
            <div className="subconatinertext1">Create Effective Teams</div>
            <div className="subconatinertext2">Soft Skills</div>
          </div>
          <div style={{ marginTop: "78px" }}>
            <div className="subconatinertext3">+ More curated content</div>
            <div className="subconatinertext3">upcoming for you!</div>
          </div>
        </div>
      </div>
    </MainContainer1>
  );
};

export default Courses;

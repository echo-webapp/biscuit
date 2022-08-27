import React, { useEffect } from "react";
import "./assets/css/landing.css";
import $ from "jquery";
import Lottie from "react-lottie";
import * as animationData from "./assets/lottiefiles/botwithHand.json";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();
  $(function () {
    var flag = 0;

    $(".share").on("click", function () {
      if (flag == 0) {
        //Left
        $(".intro-title").delay(0).fadeOut(100);
        $(".intro-greet").delay(0).fadeOut(100);
        $(".click-me").delay(0).fadeOut(100);

        $(".intro-title, .intro-greet, .click-me").delay(0).animate(
          {
            top: "50%",
          },
          100
        );

        $(this).siblings(".one").delay(100).animate(
          {
            top: "20%",
            left: "50%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".two").delay(110).animate(
          {
            top: "30%",
            left: "40%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".three").delay(120).animate(
          {
            top: "40%",
            left: "30%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".four").delay(130).animate(
          {
            top: "50%",
            left: "25%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".five").delay(140).animate(
          {
            top: "60%",
            left: "30%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".six").delay(150).animate(
          {
            top: "70%",
            left: "40%",
            padding: "3px 15px",
          },
          500
        );

        //Right
        $(this).siblings(".seven").delay(160).animate(
          {
            top: "80%",
            left: "50%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".eight").delay(170).animate(
          {
            top: "70%",
            left: "60%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".nine").delay(180).animate(
          {
            top: "60%",
            left: "70%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".ten").delay(190).animate(
          {
            top: "50%",
            left: "75%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".eleven").delay(200).animate(
          {
            top: "40%",
            left: "70%",
            padding: "3px 15px",
          },
          500
        );

        $(this).siblings(".twelve").delay(210).animate(
          {
            top: "30%",
            left: "60%",
            padding: "3px 15px",
          },
          500
        );

        $(
          ".one h1,.two h1, .three h1,.four h1,.five h1,.six h1,.seven h1,.eight h1,.nine h1,.ten h1,.eleven h1,.twelve h1"
        )
          .delay(500)
          .fadeIn(200);
        flag = 1;
      } else {
        $(
          ".one, .two, .three,.four ,.five,.six,.seven ,.eight ,.nine,.ten ,.eleven ,.twelve "
        ).animate(
          {
            top: "50%",
            left: "50%",
            padding: "0px 0px",
          },
          500
        );

        $(".intro-greet").animate(
          {
            top: "20%",
          },
          100
        );
        $(".intro-title").animate(
          {
            top: "30%",
          },
          100
        );
        $(".click-me").animate(
          {
            top: "70%",
          },
          100
        );

        $(".intro-title").delay(500).fadeIn(300);
        $(".intro-greet").delay(500).fadeIn(300);
        $(".click-me").delay(500).fadeIn(300);
        $(
          ".one h1,.two h1, .three h1,.four h1,.five h1,.six h1,.seven h1,.eight h1,.nine h1,.ten h1,.eleven h1,.twelve h1"
        )
          .delay(0)
          .fadeOut(300);
        flag = 0;
      }
    });
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <div className="share">
        <Lottie
          options={{ animationData: animationData, loop: true, autoplay: true }}
          isClickToPauseDisabled={true}
          height={250}
          width={250}
        />
      </div>

      <h2 className="intro-greet">Hello! I am cookie</h2>
      <h2 className="intro-title">The AI Powered Product Manager</h2>
      <h2 className="click-me">
        They say i am the worlds best product manager but i am still learning
        and will help you learn also :) Click on me to know more!
      </h2>

      <div
        className="one"
        onClick={() => {
          history.push("home/feed");
        }}
      >
        <h1>
          Play the latest episode of Project Managers Diary (Podcast) Cookie
          Talk (News)
        </h1>
      </div>

      <div
        className="two"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Can you play project manager Stories</h1>
      </div>
      <div
        className="three"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Cookie tell me about yourself</h1>
      </div>
      <div
        className="four"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Teach me how to do market research</h1>
      </div>
      <div
        className="five"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Cookie! give me a challenge</h1>
      </div>
      <div
        className="six"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Can you test this product and share feedback</h1>
      </div>
      <div
        className="seven"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>
          Cookie can you share a mood board of home screens with green theme
        </h1>
      </div>
      <div
        className="eight"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Show me everything in store from you</h1>
      </div>
      <div
        className="nine"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Teach me how to do A/B Testing</h1>
      </div>
      <div
        className="ten"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>How to become a product manager in the jewellery segment?</h1>
      </div>
      <div
        className="eleven"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Are you the dalle for product managers</h1>
      </div>
      <div
        className="twelve"
        onClick={() => {
          history.push("home");
        }}
      >
        <h1>Connect me with a product manager mentor in the footwear space</h1>
      </div>
    </div>
  );
}

export default Landing;

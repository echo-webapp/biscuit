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
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".two").delay(110).animate(
          {
            top: "30%",
            left: "40%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".three").delay(120).animate(
          {
            top: "40%",
            left: "30%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".four").delay(130).animate(
          {
            top: "50%",
            left: "25%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".five").delay(140).animate(
          {
            top: "60%",
            left: "30%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".six").delay(150).animate(
          {
            top: "70%",
            left: "40%",
            padding: "8px 24px",
          },
          500
        );

        //Right
        $(this).siblings(".seven").delay(160).animate(
          {
            top: "80%",
            left: "50%",
            padding: "16px 24px",
          },
          500
        );

        $(this).siblings(".eight").delay(170).animate(
          {
            top: "70%",
            left: "60%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".nine").delay(180).animate(
          {
            top: "60%",
            left: "70%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".ten").delay(190).animate(
          {
            top: "50%",
            left: "75%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".eleven").delay(200).animate(
          {
            top: "40%",
            left: "70%",
            padding: "8px 24px",
          },
          500
        );

        $(this).siblings(".twelve").delay(210).animate(
          {
            top: "30%",
            left: "60%",
            padding: "8px 24px",
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
        <h2 className="click-me text-base color-primary hover:cursor-pointer">
          Click here to know more
        </h2>
      </div>

      <h2 className="intro-greet">
        Hello! I’m <span className="color-primary">Biscuit.</span>
      </h2>
      <h2 className="intro-title">
        The Ultimate AI bot Companion for Product folks.
      </h2>

      <div
        className="one box-shadow bot-cards"
        onClick={() => {
          history.push("home/news");
        }}
      >
        <h1>
          Play the latest episode of <br /> Project Managers Diary (Podcast)
          Biscuit Talk (News)
        </h1>
      </div>

      <div
        className="two box-shadow bot-cards"
        onClick={() => {
          history.push("home/casestudy");
        }}
      >
        <h1>
          Can you play <br />
          project manager Stories?
        </h1>
      </div>
      <div className="seven  box-shadow bot-cards">
        <a href="https://jemi.so/_biscuit" target="_blank">
          <h1>Biscuit tell me about yourself</h1>
        </a>
      </div>

      <div
        className="four box-shadow bot-cards"
        onClick={() => {
          history.push("home/feed");
        }}
      >
        <h1>
          Teach me how to do <br />
          market research
        </h1>
      </div>
      <div
        className="five box-shadow bot-cards"
        onClick={() => {
          history.push("home/challenge");
        }}
      >
        <h1>
          Biscuit! <br /> give me a challenge
        </h1>
      </div>
      <div
        className="six box-shadow bot-cards"
        onClick={() => {
          history.push("home/testing");
        }}
      >
        <h1>
          Can you test this product <br /> and share feedback
        </h1>
      </div>
      <div
        className="three box-shadow bot-cards"
        onClick={() => {
          history.push("home/courses");
        }}
      >
        <h1>
          Biscuit I want to learn some <br /> product management
        </h1>
      </div>
      <div
        className="eight box-shadow bot-cards"
        onClick={() => {
          history.push("home/feed");
        }}
      >
        <h1>
          Show me everything <br /> in store from you
        </h1>
      </div>
      <div
        className="nine box-shadow bot-cards"
        onClick={() => {
          history.push("home/testing");
        }}
      >
        <h1>
          Teach me how to do <br />
          A/B Testing
        </h1>
      </div>
      <div
        className="ten box-shadow bot-cards"
        onClick={() => {
          history.push("home/community");
        }}
      >
        <h1>
          Top mentors for <br /> Product Management
        </h1>
      </div>
      <div
        className="eleven box-shadow bot-cards"
        onClick={() => {
          history.push("home/challenges");
        }}
      >
        <h1>
          Give me some <br />
          real world problem
        </h1>
      </div>
      <div
        className="twelve box-shadow bot-cards"
        onClick={() => {
          history.push("home/community");
        }}
      >
        <h1>
          Connect with community of <br /> women Product Managers
        </h1>
      </div>
    </div>
  );
}

export default Landing;

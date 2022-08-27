import React, { useState } from "react";
import { Eye } from "../assets/svgs/eye";
import { Share } from "../assets/svgs/share";
import { Bookmark } from "../assets/svgs/bookmark";
import { FolderOpen } from "../assets/svgs/folderOpen";
import { Profileuser } from "../assets/svgs/profileuser";
import { Clock } from "../assets/svgs/clock";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import pinterest from "../assets/images/pinterest.png";
import imageW from "../assets/images/W.png";
import shopify from "../assets/images/shopify.png";
import telegram from "../assets/images/telegram.png";
import MiroSoft from "../assets/images/miro.png";
import Netflix from "../assets/images/netflix.png";
import imageD from "../assets/images/D.png";
import banner from "../assets/images/inner-banner.jpg";
import SearchBar from "./searchbar";
import Navbar from "./navbar";
import Feed from "./feed";
import Testing from "./testing";
import Challenges from "./challenges";
import { TickCircle } from "../assets/svgs/tickCircle";

const InnerPage = () => {
  const [selected, setselected] = useState("challenges");
  let SocialMedia = [pinterest, telegram];
  const rewarded_arr = [
    {
      image: image2,
      heading: "Product 101",
      title: "Fundamentals",
      price: "1,0009",
      share: "2",
      brandLogo: Netflix,
    },
    {
      image: image2,
      heading: "Build and Leverage User Exp",
      title: "Fundamentals",
      price: "1,0009",
      share: "2",
      brandLogo: imageD,
    },
    {
      image: image2,
      heading: "Determine Market Value",
      title: "Fundamentals",
      price: "1,0009",
      share: "2",
      brandLogo: MiroSoft,
    },
  ];
  return (
    <div className="flex flex-col mt-12  items-center w-full">
      <div className="flex justify-center gap-8 my-10 flex-wrap w-5/6">
        {/* Inner page start */}
        <>
          <div className="flex flex-col  bg-white rounded-lg relative w-2/4">
            <img
              src={banner}
              className="w-100 object-contain"
              alt="no image"
              style={{}}
            />
            <div className="flex flex-col p-5  bg-white rounded-lg relative w-100">
              <div className="text-4xl font-semibold mt-2">
                How would you measure the success of Facebook Likes?
              </div>

              <div className="flex justify-between items-center mt-2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0px 0px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      color: "#141522",
                      fontSize: "16px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Asked in{" "}
                  </span>
                  <div style={{ marginLeft: "30px" }}>
                    {SocialMedia.length > 0 ? (
                      <>
                        {SocialMedia.map((data, id) => {
                          return (
                            <div
                              style={{
                                position: "absolute",
                                display: "flex",
                                flexDirection: "row",
                                top: 0,
                                right: 0 - id * 11,
                              }}
                            >
                              <img
                                src={data}
                                // className="w-12 object-contain"
                                alt="no image"
                                style={{
                                  borderRadius: "200px",
                                  width: "24px",
                                  height: "24px",
                                }}
                              />
                            </div>
                          );
                        })}
                        <div
                          style={{
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: 20,
                            top: 0,
                            width: "100px",
                          }}
                        >
                          <span
                            style={{
                              color: "#04A4F4",
                              fontSize: "14px",
                              fontWeight: "500",
                              cursor: "pointer",
                              paddingLeft: "5px",
                              borderLeft: " 1px solid #DFDFDF",
                            }}
                          >
                            + Get Mentors{" "}
                          </span>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <div>{/* <Eye /> */}</div>
                    {/* <div style={{ color: "#54577A", fontSize: "16px", fontWeight: "500" }}>{item.views}K</div> */}
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-start items-center mt-2">
                <div className="flex flex-row items-center	">
                  <Profileuser />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#141522",
                      fontWeight: "500",
                      paddingLeft: "5px",
                    }}
                  >
                    215 Answers
                  </span>
                </div>
                <div className="flex flex-row items-center ml-2	">
                  <Clock />
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#141522",
                      fontWeight: "500",
                      paddingLeft: "5px",
                    }}
                  >
                    1 Hour
                  </span>
                </div>
              </div>
            </div>
            <div style={{ padding: "10px 20px" }}>
              <span
                style={{
                  color: "#141522",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Description
              </span>
              <p
                style={{
                  color: "#141522",
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "16px 0px 0px 0px",
                }}
              >
                After a year of Facebook’s “like” button updates, the “like”
                button design of Facebook attracts people’s attention again due
                to the Ted speech of Margaret Gould Steward. Is it really this
                difficult to redesign a button as small as the “like” button on
                Facebook? Yes, Steward says. And according to the news, the
                leader of the project spent about 280 hours on coming up with a
                feasible solution.
              </p>
            </div>
            <div style={{ padding: "10px 20px" }}>
              <span
                style={{
                  color: "#141522",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Essence of Assessment
              </span>
              <div className="flex flex-row items-center	mt-3">
                <TickCircle />
                <span
                  style={{
                    fontSize: "14px",
                    color: "#141522",
                    fontWeight: "500",
                    paddingLeft: "10px",
                  }}
                >
                  Understanding the tools in Product management
                </span>
              </div>
              <div className="flex flex-row items-center	mt-3">
                <TickCircle />
                <span
                  style={{
                    fontSize: "14px",
                    color: "#141522",
                    fontWeight: "500",
                    paddingLeft: "10px",
                  }}
                >
                  Understand the basics of Product metrics
                </span>
              </div>
            </div>
            <div style={{ padding: "10px 20px" }}>
              <span
                style={{
                  color: "#141522",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Resources
              </span>
              <p
                style={{
                  color: "#141522",
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "16px 0px 0px 0px",
                }}
              >
                If you need help with this challenge, check out our hand-picked
                tutorial recommendations.
              </p>
            </div>
            <div className="flex justify-start gap-5 my-10 flex-wrap mx-2">
              {rewarded_arr.map((item) => {
                return (
                  <>
                    <div
                      className="flex flex-col p-4 bg-white rounded-lg relative w-60 "
                      style={{
                        boxShadow:
                          " 0px 1.18158px 11.8158px rgba(0, 0, 0, 0.08)",
                      }}
                    >
                      <div className="w-55 rounded-lg">
                        <img
                          src={item.image}
                          className="w-55 object-contain"
                          alt="no image"
                          style={{}}
                        />
                      </div>
                      <div className="font-bold text-base mt-2">
                        {item.heading}
                      </div>
                      <div
                        className="font-sm font-light flex-grow"
                        style={{
                          color: "#54577A",
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {item.title}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="bookmark">
                          <div className="flex gap-2 items-center">
                            <div className="flex flex-row items-center ml-2	">
                              <Clock />
                              <span
                                style={{
                                  fontSize: "14px",
                                  color: "#141522",
                                  fontWeight: "500",
                                  paddingLeft: "5px",
                                }}
                              >
                                12 minutes
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex gap-2">
                            <div
                              style={{
                                width: "80px",
                                height: "30px",
                                backgroundColor: "#546FFF",
                                borderRadius: "8px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0px 5px",
                              }}
                            >
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                }}
                              >
                                Watch now
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col p-4 bg-white h-fit rounded-lg relative w-1/4">
            <div style={{ padding: "24px 0px 16px 24px" }}>
              <span
                style={{
                  color: "#546FFF",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Product Challenge
              </span>
            </div>
            <div style={{ padding: "0px 0px 12px 24px" }}>
              <span
                style={{
                  color: "#141522",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Share your result
              </span>
              <p
                style={{
                  color: "#141522",
                  fontSize: "14px",
                  fontWeight: "400",
                  padding: "0px 0px 12px 0px",
                }}
              >
                When you finish the challenge, post your work on Twitter! Be
                sure to use the hashtag #Biscuit and tag our account @Biscuit.
                We'll keep an eye out and repost good examples on a regular
                basis.
              </p>
              <p
                style={{
                  color: "#141522",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {" "}
                We're also building a new paid community for designers where
                you'll be able to get even more feedback. See more details.
              </p>
            </div>

            <div style={{ padding: "28px 0px 20px 24px" }}>
              <span
                style={{
                  color: "#141522",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                File Taskt
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    color: "#54577A",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Last Modified
                </span>
                <span
                  style={{
                    color: "#141522",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  26 Aug 2022
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    color: "#54577A",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  File submissions
                </span>
              </div>
              <div
                style={{
                  borderStyle: "dashed",
                  borderColor: "#546FFF",
                  borderWidth: 1,
                  borderRadius: "8px",
                  height: "130px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FolderOpen />
              </div>
              <span
                style={{
                  color: "#54577A",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                *upload file or share link
              </span>

              <div
                style={{
                  backgroundColor: "#546FFF",
                  height: "45px",
                  margin: "20px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#FFFFFF",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Submit answer
                </span>
              </div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  height: "45px",
                  margin: "20px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#141522",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  View answers
                </span>
              </div>
            </div>
          </div>
        </>
        {/* Inner page start */}
      </div>
    </div>
  );
};

export default InnerPage;

import React from "react";
import { Eye } from "../assets/svgs/eye";
import { Share } from "../assets/svgs/share";
import { Bookmark } from "../assets/svgs/bookmark";
import { ProTag } from "../assets/svgs/protag";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import pinterest from "../assets/images/pinterest.png";
import imageW from "../assets/images/W.png";
import shopify from "../assets/images/shopify.png";
import telegram from "../assets/images/telegram.png";
import MiroSoft from "../assets/images/miro.png";
import Netflix from "../assets/images/netflix.png";
import imageD from "../assets/images/D.png";



const rewarded_arr = [
    {
        image: image2,
        heading: "You are the PM for a streaming video service. You come into the office and see that one key metric has dropped by 80%. What will you do?",
        title: "Ends in  11 d : 12hr ",
        price: "1,0009",
        share: "2",
        brandLogo: Netflix

    },
    {
        image: image2,
        heading:
            "Calculate the number of queries answered by Google per second.",
        title: "Ends in  11 d : 12hr ",
        price: "1,0009",
        share: "2",
        brandLogo: imageD

    },
    {
        image: image2,
        heading: "How would you decide whether or not doubling the amount of video content in the home timeline was a good idea?",
        title: "Ends in  11 d : 12hr ",
        price: "1,0009",
        share: "2",
        brandLogo: MiroSoft

    },

];
const solve_problems_arr = [
    {
        image: image2,
        heading: "How would you improve Google Maps?",
        title: "Product",
        views: "59",
        share: "2",
        SocialMedia: [pinterest]

    },
    {
        image: image2,
        heading:
            "Amazon: Increase user traction?",
        title: "Challenge",
        views: "59",
        share: "2",
        SocialMedia: [pinterest]

    },
    {
        image: image2,
        heading: "PHow would reduce cancellations for Uber?",
        title: "Challenge",
        views: "59",
        share: "2",
        pro: true,
        SocialMedia: [pinterest]

    },
    {
        image: image2,
        heading: "New patients are not showing up for their first telehealth appointment. How would you solve this issue?",
        title: "Product",
        views: "59",
        share: "2",
        SocialMedia: [pinterest]

    },
    {
        image: image1,
        heading: "Drivers are dropping out of a city on Lyft. How do you figure out what's going on?",
        title: "Problem solving",
        views: "59",
        share: "2",
        SocialMedia: [pinterest, telegram]
    },

];


const Challenges = () => {


    return (
        <><>
            <div className=" font-semibold  gap-8 my-10 flex-wrap w-5/6" style={{}}>
                <span className="text-color text-2xl">Get rewarded </span>
                <p style={{ color: "#54577A", fontWeight: "400", fontSize: '16px' }}>Solve problems & get rewards from companies</p>
            </div>
            {rewarded_arr.map((item) => {
                return (<>
                    <div className="flex flex-col p-4 bg-white rounded-lg relative w-76">
                        <div className="w-72 rounded-lg">
                            <img
                                src={item.image}
                                className="w-72 object-contain"
                                alt="no image"
                                style={{}}
                            />
                        </div>
                        <div className="font-bold text-base mt-2">{item.heading}</div>
                        <div className="font-sm font-light flex-grow" style={{ color: "#546FFF", fontWeight: "500", fontSize: "12px" }}>{item.title}</div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="bookmark">
                                <div className="flex gap-2 items-center">
                                    <ProTag />
                                </div>
                            </div>
                            <div className="flex gap-4">


                                <div className="flex gap-2">

                                    <div style={{ width: "130px", height: "40px", backgroundColor: "#546FFF", borderRadius: "8px", display: 'flex', justifyContent: "space-evenly", alignItems: 'center', padding: "0px 10px" }}>
                                        <img
                                            src={item.brandLogo}
                                            alt="no image"
                                            style={{ borderRadius: "200px", width: "24px", height: "24px", }}
                                        />
                                        <span style={{ color: "#FFFFFF", fontSize: "14", fontWeight: '700', cursor: 'pointer' }}>${item.price}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
                );
            })}
        </>
            <>
                <div className=" font-semibold  gap-8 my-10 flex-wrap w-5/6" style={{}}>
                    <span className="text-color text-2xl">Solve problems </span>
                    <p style={{ color: "#54577A", fontWeight: "400", fontSize: '16px' }}>Over 2,000 questions from the best tech companies</p>

                </div>
                {solve_problems_arr.map((item) => {
                    return (<>
                        <div className="flex flex-col p-4 bg-white rounded-lg relative w-76">
                            <div className="w-72 rounded-lg">
                                <img
                                    src={item.image}
                                    className="w-72 object-contain"
                                    alt="no image"
                                />
                            </div>
                            <div className="font-bold text-base mt-2">{item.heading}</div>
                            <div className="font-sm font-light flex-grow" style={{ color: "#54577A", fontSize: '12px', fontWeight: '500' }}>{item.title}</div>
                            <div className="flex justify-between items-center mt-2">
                                <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: 'center', padding: "0px 10px", position: "relative" }}>
                                    <span style={{ color: "#141522", fontSize: "16", fontWeight: '500', cursor: 'pointer' }}>Asked in </span>
                                    {item.SocialMedia.length > 0 ? <>
                                        {item.SocialMedia.map((data, id) => {
                                            return (
                                                <div style={{ position: "absolute", display: "flex", flexDirection: 'row', right: (0 - id * 11) }}>
                                                    <img
                                                        src={data}
                                                        // className="w-12 object-contain"
                                                        alt="no image"
                                                        style={{ borderRadius: "200px", width: "24px", height: "24px", }}
                                                    />
                                                </div>
                                            )

                                        })}
                                    </> : <>
                                    </>}

                                </div>
                                <div className="flex gap-4">
                                    <div className="flex gap-2">
                                        <div>
                                            <Eye />
                                        </div>
                                        <div style={{ color: "#54577A", fontSize: "16px", fontWeight: "500" }}>{item.views}K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    );
                })}
            </>
        </>
    );
};

export default Challenges;

import React from "react";
import { Eye } from "../assets/svgs/eye";
import { Share } from "../assets/svgs/share";
import { Bookmark } from "../assets/svgs/bookmark";
import { ProTag } from "../assets/svgs/protag";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

const feeds_arr = [
  {
    image: image1,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image2,
    heading:
      "Drivers are dropping out of a city on Lyft. How do you figure out what's going on?",
    title: "Problem solving",
    views: "59",
    share: "2",
  },
  {
    image: image1,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
    pro: true,
  },
  {
    image: image2,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image1,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
    pro: true,
  },
  {
    image: image2,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image2,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
  },
  {
    image: image1,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
    pro: true,
  },
  {
    image: image2,
    heading: "PM mental models",
    title: "Product",
    views: "59",
    share: "2",
  },
];

const Feed = ({ setOpen }) => {
  return (
    <div className="flex justify-center gap-8 my-10 flex-wrap w-5/6">
      {feeds_arr.map((item) => {
        return (
          <div
            className="flex flex-col p-4 bg-white rounded-lg relative w-76 cardHover cardHoverTransition"
            onClick={() => {
              if (item?.pro) {
                console.log("inside");
                setOpen(true);
              }
            }}
          >
            <div className="w-72 rounded-lg">
              <img
                src={item.image}
                className="w-72 object-contain"
                alt="no image"
              />
            </div>
            <div className="font-bold text-base mt-2">{item.heading}</div>
            <div className="font-sm font-light flex-grow">{item.title}</div>
            <div className="flex justify-between items-center mt-2">
              <div className="bookmark">
                <div className="flex gap-2 items-center">
                  <Bookmark />
                  {item?.pro ? <ProTag color="#FFB054" /> : null}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <div>
                    <Eye />
                  </div>
                  <div>{item.views}</div>
                </div>
                <div className="flex gap-2">
                  <div>{item.share}</div>
                  <div>
                    <Share />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;

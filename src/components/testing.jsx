import React from "react";
import { Eye } from "../assets/svgs/eye";
import { Share } from "../assets/svgs/share";
import { Bookmark } from "../assets/svgs/bookmark";
import { ProTag } from "../assets/svgs/protag";
import image1 from "../assets/images/testing1.png";
import image2 from "../assets/images/testing2.png";
import image3 from "../assets/images/testing43.png";
import image4 from "../assets/images/testing4.png";
import image5 from "../assets/images/testing5.png";

const testing_arr = [
  {
    image: image1,
    heading: "Heatmaps",
    title: "Visualize human behaviour",
  },
  {
    image: image2,
    heading: "Feedback",
    title: "Discover how your user feels",
  },
  {
    image: image3,
    heading: "A/B testing ",
    title: "Web",
  },
  {
    image: image4,
    heading: "PM mental models",
    title: "Product",
  },
  {
    image: image5,
    heading: "Recordings",
    title: "See what your user see",
  },
  {
    image: image2,
    heading: "Surveys",
    title: "Hear from users",
  },
];

const Feed = () => {
  return (
    <div className="flex justify-center gap-8 my-10 flex-wrap w-5/6">
      {testing_arr.map((item) => {
        return (
          <div className="flex flex-col p-4 bg-white rounded-lg relative w-76">
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
                  <ProTag color="#FFB054" />
                </div>
              </div>
              <div className="flex underline font-light text-base">
                Learn More
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;

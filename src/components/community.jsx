import React from "react";
import image1 from "../assets/images/community1.png";
import image2 from "../assets/images/community2.png";
import image3 from "../assets/images/community3.png";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import { ProTag } from "../assets/svgs/protag";
import { Star } from "../assets/svgs/start";
import { Task } from "../assets/svgs/task";

const community_arr = [
  { title: "Women in Product", members: 200, image: image1 },
  { title: "Growth Hackers", members: 200, image: image2 },
  { title: "Data Product Hub", members: 200, image: image3 },
];

const mentors_arr = [
  {
    name: "Jessica Jane",
    title: "Web Developer",
    desc: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    reviews: "750",
    rating: 4.7,
    image: person1,
    topRated: true,
  },
  {
    name: "Jessica Jane",
    title: "Web Developer",
    desc: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    reviews: "750",
    rating: 4.7,
    image: person1,
    topRated: true,
    task: 40,
  },
  {
    name: "Jessica Jane",
    title: "Web Developer",
    desc: "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    reviews: "750",
    rating: 4.7,
    image: person1,
    topRated: true,
    task: 40,
  },
  {
    name: "Alex Stanton",
    title: "UI/UX Designer",
    desc: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX  . . . ",
    reviews: "750",
    rating: 4.7,
    image: person2,
    topRated: false,
    task: 60,
  },
  {
    name: "Antoine Griezmann",
    title: "Android Developer",
    desc: "Hi, I'm Alex Stanton. I am a doctoral student at Oxford University majoring in UI / UX  . . . ",
    reviews: "750",
    rating: 4.7,
    image: person3,
    topRated: false,
    task: 80,
  },
];

const Community = () => {
  return (
    <div className="flex flex-col justify-center gapr-4 my-10 wp-70">
      <div className="flex flex-col gap-8">
        <div className="font-bold text-2xl color-heading">
          Popular Communities
        </div>
        <div className="flex gap-8">
          {community_arr.map((item) => {
            return (
              <div className="flex flex-col p-4 bg-white rounded-lg relative box-shadow">
                <div className="rounded-lg">
                  <img
                    src={item.image}
                    className="object-contain"
                    alt="no image"
                  />
                </div>
                <div className="font-bold text-base mt-2">{item.title}</div>
                <div className="font-sm font-light">{item.members} members</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="font-bold text-2xl color-heading">
          Top Rated Mentors
        </div>
        <div className="flex gap-4">
          {mentors_arr.map((item) => {
            if (item.topRated)
              return (
                <div className="flex flex-col p-4 bg-white rounded-lg relative">
                  <div className="flex">
                    <div className="w-8 h-8 rounded-xl">
                      <img
                        src={item.image}
                        className="w-8 h-8 object-contain"
                        alt="no image"
                      />
                    </div>
                    <div className="flex flex-col flex-grow ml-2">
                      <div className="font-bold">{item.name}</div>
                      <div className="font-light">{item.title}</div>
                    </div>
                    <div className="ml-24 color-primary">Book</div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div>
                      <ProTag color="#54577A" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <Star />
                      </div>
                      <div>
                        {item.rating} ({item.reviews} Reviews)
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="font-bold text-2xl color-heading">All Mentors</div>
        <div className="flex flex-wrap gap-4">
          {mentors_arr.map((item) => {
            return (
              <div className="flex flex-col w-80 p-4 bg-white rounded-lg relative">
                <div className="flex">
                  <div className="w-8 h-8 rounded-xl">
                    <img
                      src={item.image}
                      className="w-8 h-8 object-contain"
                      alt="no image"
                    />
                  </div>
                  <div className="flex flex-col flex-grow ml-2">
                    <div className="font-bold">{item.name}</div>
                    <div className="font-light">{item.title}</div>
                  </div>
                  <div className="color-primary">Follow</div>
                </div>
                <div className="text-sm font-light color-secondary mt-4">
                  {item.desc}
                </div>
                <div className="flex justify-between mt-8">
                  <div className="flex gap-1">
                    <div>
                      <Task />
                    </div>
                    <dir>{item.task} Tasks</dir>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <Star />
                    </div>
                    <div>
                      {item.rating} ({item.reviews} Reviews)
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Community;

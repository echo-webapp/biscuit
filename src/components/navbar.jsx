import React from "react";
import { ProTagnoText } from "../assets/svgs/protagnotext";

const nav_arr = [
  { value: "feed", heading: "Feed" },
  { value: "courses", heading: "Courses" },
  { value: "challenges", heading: "Challenges" },
  { value: "casestudy", heading: "Case study" },
  { value: "news", heading: "News" },
  { value: "testing", heading: "Testing" },
  { value: "community", heading: "Community" },
];

const Navbar = ({ selected, setselected }) => {
  return (
    <div className="flex gap-2">
      {nav_arr.map((item) => {
        if (item.value == "testing") {
          return (
            <div
              className={`${
                item.value == selected ? "bg-purple" : ""
              } navbar-item px-5 py-3 rounded-lg cursor-pointer flex`}
              onClick={() => {
                setselected(item.value);
              }}
            >
              <span className="pr-1">
                <ProTagnoText color="#FFB054" />
              </span>
              {item.heading}
            </div>
          );
        }
        return (
          <div
            className={`${
              item.value == selected ? "bg-purple" : ""
            } navbar-item px-5 py-3 rounded-lg cursor-pointer`}
            onClick={() => {
              setselected(item.value);
            }}
          >
            {item.heading}
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

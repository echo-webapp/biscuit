// import { makeStyles } from "@mui/styles";
import arrow from "./../assets/svgs/arrow.svg";
import styled from "styled-components";
export const PrevButton = styled.button`
  border-radius: 50%;
  border: 1px solid #666666;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translatey(-50%) rotate(180deg);
  @media only screen and (max-width: 500px) {
    left: 12px;
  }
  img {
    margin: auto;
  }
`;

export const NextButton = styled.button`
  border-radius: 50%;
  border: 1px solid #666666;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translatey(-50%);
  @media only screen and (max-width: 500px) {
    right: 0px;
    background: white;
  }
  img {
    margin: auto;
  }
`;
export function SampleNextArrow(props) {
  const { style, ownStyles, onClick } = props;

  return (
    <NextButton
      onClick={onClick}
      style={{
        ...style,
        ...ownStyles,
        display: onClick === null ? "none" : "block",
        position: "absolute",
        right: window.innerWidth > 500 ? "-56px" : "-30px",
        zIndex: 500,
      }}
    >
      <img src={arrow} alt="" />
    </NextButton>
  );
}

export function SamplePrevArrow(props) {
  const { style, ownStyles, onClick } = props;

  return (
    <PrevButton
      onClick={onClick}
      style={{
        ...style,
        ...ownStyles,
        display: onClick === null ? "none" : "block",
        position: "absolute",
        left: window.innerWidth > 500 ? "-56px" : "-30px",
        zIndex: 500,
      }}
    >
      <img src={arrow} alt="" />
    </PrevButton>
  );
}
export const generateSettings = (width) => {
  return {
    accessibility: true,
    speed: 600,
    slidesToShow: width >= 1000 ? 3 : width >= 750 ? 2 : 1,
    slidesToScroll: width >= 1000 ? 3 : width >= 750 ? 2 : 1,
    infinite: width >= 1000 ? true : false,
    dots: width >= 800 ? true : false,
    // afterChange: function (currentSlide) {
    // },
    beforeChange: function (prev, next) {},
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
};

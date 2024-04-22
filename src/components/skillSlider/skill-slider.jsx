import React from "react";
import Slider from "react-slick";

import { JSIcon } from "../../assets/icon/js-icon";
import { TSIcon } from "../../assets/icon/ts-icon";
import { ReactIcon } from "../../assets/icon/react-icon";
import { NextJSIcon } from "../../assets/icon/next-js-icon";
import { TailwindIcon } from "../../assets/icon/tailwind-icon";
import { FigmaIcon } from "../../assets/icon/figma-icon";
import { SassIcon } from "../../assets/icon/sass-icon";
import { GitIcon } from "../../assets/icon/git-icon";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const SkillSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <JSIcon />
        </div>
        <div>
          <ReactIcon />
        </div>
        <div>
          <TSIcon />
        </div>
        <div>
          <NextJSIcon />
        </div>
        <div>
          <TailwindIcon />
        </div>
        <div>
          <GitIcon />
        </div>
        <div>
          <FigmaIcon />
        </div>
        <div>
          <SassIcon />
        </div>
      </Slider>
    </div>
  );
};

export default SkillSlider;

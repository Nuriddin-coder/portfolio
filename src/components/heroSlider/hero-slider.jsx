import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderImg1 from "../../assets/img/react-imgg.png";
import SliderImg2 from "../../assets/img/ts.png";
import SliderImg3 from "../../assets/img/js.png";
import SliderImg4 from "../../assets/img/tailwind.png";
import SliderImg5 from "../../assets/img/sass.png";
import SliderImg6 from "../../assets/img/figma-img.png";
import SliderImg7 from "../../assets/img/githubb.webp";

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

function HeroSlider() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container text-center">
      <Slider {...settings}>
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg1} alt="img" />
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg2} alt="img" />
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg3} alt="img" />
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg4} alt="img" />
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg5} alt="img" />
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg6} alt="img" />
        <img className="max-w-[200px] tablet:max-w-[250px]" src={SliderImg7} alt="img" />
      </Slider>
    </div>
  );
}

export default HeroSlider;

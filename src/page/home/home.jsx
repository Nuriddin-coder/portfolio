import React from "react";
import HeroSlider from "../../components/heroSlider/hero-slider";

////// Import Icons
import { LocationIcon } from "../../assets/icon/location-icon";

import { GitHubIcon } from "../../assets/icon/git-hub-icon";
import { LinkedinIcon } from "../../assets/icon/linkedin-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";

////// Import Imgs
import Img from "../../assets/img/githubb.webp";
import { Link } from "react-router-dom";
import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";

export const Home = () => {
  return (
    <div>
      <div className="items-center justify-center gap-[200px] tablet:py-[40px] desktop:flex">
        <div className="my-6 desktop:hidden">
          <HeroSlider />
        </div>

        <div className="pt-4">
          <h1 className="text-[34px] font-semibold text-Gray900 dark:text-white tablet:text-[50px] tablet:font-bold">
            Hi, I'm Ned! <span class="wave">👋</span>
          </h1>
          <p className="max-w-[600px] text-Gray600 dark:text-white tablet:max-w-[700px] tablet:text-[20px] tablet:font-semibold">
            I'm Frontend Developer. I don't have much experience yet, but I
            think I have some projects that you might like. Whenever I start
            writing code, I feel like I'm in my real world, I think that writing
            code and living with code is my world. I always thought it was a
            love of programming. I enjoy writing code and solving problems.
          </p>

          <div className="mt-[50px] flex items-center gap-2">
            <LocationIcon />
            <p className="text-Gray600 dark:text-white  tablet:text-[20px] tablet:font-semibold">
              Tashkent, Uzbekistan
            </p>
          </div>

          {/* Links */}
          <div className="mt-7 flex items-center gap-3">
            <Link
              to="https://github.com/Nuriddin-coder"
              className="tooltip"
              data-tip="Git Hub"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/nuriddin-sirojiddinov-02a84a237/"
              className="tooltip"
              data-tip="Linkedin"
            >
              <LinkedinIcon />
            </Link>
            <Link
              to="https://www.facebook.com/share/fpK7cKdaqqPkQdaw/?mibextid=qi2Omg"
              className="tooltip"
              data-tip="Facebook"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://t.me/Nuriddin909"
              className="tooltip"
              data-tip="Telegram"
            >
              <TelegramIcon />
            </Link>
            <Link
              to="https://www.instagram.com/nuriddin_444?igsh=NnpueXlwN2tkYXh1"
              className="tooltip"
              data-tip="Instagram"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>

        <img
          className="hidden w-[320px] desktop:inline-block"
          src={Img}
          alt="github"
        />
      </div>
    </div>
  );
};

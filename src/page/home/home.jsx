import HeroSlider from "../../components/heroSlider/hero-slider";
import { Link } from "react-router-dom";
import SkillSlider from "../../components/skillSlider/skill-slider";

////// Import Icons
import { LocationIcon } from "../../assets/icon/location-icon";
import { GitHubIcon } from "../../assets/icon/git-hub-icon";
import { LinkedinIcon } from "../../assets/icon/linkedin-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";

import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
import { LinkIcon } from "../../assets/icon/link-icon";

////// Import Imgs
import Img from "../../assets/img/githubb.webp";
import GipperImg from "../../assets/img/gipper.png";

export const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div className="container items-center justify-center gap-[200px] tablet:py-[40px] desktop:flex">
        <div className="my-6 desktop:hidden">
          <HeroSlider />
        </div>

        <div className="pb-[60px] pt-4">
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
      </div>

      {/* Skill */}
      <section id="skill" className="bg-Gray50 dark:bg-GrayDark50">
        <div className="container py-[30px]">
          <p className="mx-auto w-[75px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
            Skills
          </p>
          <p className="mt-4 text-center text-Gray600 dark:text-GrayDark600">
            The skills, tools and technologies I am really good at:
          </p>
          <div className="mt-[50px]">
            <SkillSlider />
          </div>
        </div>
      </section>

      {/* Work */}
      <section>
        <div className="container py-8">
          <p className="mx-auto w-[75px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
            Work
          </p>
          <p className="mt-4 text-center text-Gray600 dark:text-GrayDark600">
            Some of the noteworthy projects I have built:
          </p>

          <div className="mt-[30px] justify-between rounded-lg shadow-lg dark:shadow-lg desktop:flex">
            {/* IMG site */}
            <Link
              to="https://gipermart.netlify.app/"
              className="group cursor-pointer rounded-radiusOnlyTop bg-gray-50 p-6 dark:bg-GrayDark200 desktop:flex desktop:w-full desktop:items-center desktop:rounded-none"
            >
              <img
                className="mx-auto h-[150px] w-[270px] duration-300 group-hover:scale-110 tablet:h-[250px] tablet:w-[420px] desktop:h-[320px] desktop:w-[550px]"
                src={GipperImg}
                alt="img"
              />
            </Link>

            {/* Info site */}
            <div className="px-6 pb-6 pt-8 dark:bg-GrayDark100 desktop:w-full desktop:pl-10">
              <h1 className="text-[18px] font-bold text-Gray900 dark:text-GrayDark900">
                Gipper Mart
              </h1>
              <p className="mt-4 max-w-[500px] text-Gray600 dark:text-GrayDark600">
                This my Ecommers Project. in this project you can buy the item
                you want, place an order and keep the item you like. You can
                search your favorite items
              </p>

              <div className="mt-6 flex max-w-[400px] flex-wrap gap-x-4 gap-y-3">
                <p className="w-[75px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  React
                </p>

                <p className="w-[135px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  Readux-toolkit
                </p>
                <p className="w-[115px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  React Query
                </p>
                <p className="w-[85px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  Axios
                </p>
                <p className="w-[115px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  Tailwindcss
                </p>
                <p className="w-[85px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  Daisy UI
                </p>
                <p className="w-[165px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  React Slick Slider
                </p>
                <p className="w-[115px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
                  React Lazy
                </p>
              </div>
              <div className="w-[85px] border-b-2 pt-8 desktop:border-none">
                <Link
                  to="https://gipermart.netlify.app/"
                  className="group flex items-center gap-2 text-[18px] text-Gray600 dark:text-GrayDark600"
                >
                  Review
                  <span className="mb-1 duration-300 group-hover:scale-125">
                    <LinkIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

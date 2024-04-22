import React from "react";
import { DarkMode } from "../../components/darkMode/dark-mode";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="container flex justify-between pt-2">
        <Link to="/">
          <p className="text-[20px] font-bold dark:text-white tablet:text-[26px] desktop:text-[30px]">
            {" "}
            &lt;N.DEV/&gt;
          </p>
        </Link>
        <div className="flex items-center gap-3 tablet:gap-6">
          <div className="flex items-center gap-4 border-r-[1px] pr-4 tablet:gap-10 tablet:pr-7">
            <a
              href="#skill"
              className="hidden border-b-2 border-transparent text-Gray600 duration-700 hover:border-black hover:text-black dark:text-white hover:dark:border-white tablet:flex tablet:font-semibold desktop:text-[20px]"
            >
              Skill
            </a>
            <Link className="border-b-2 border-transparent text-Gray600 duration-700 hover:border-black hover:text-black dark:text-white hover:dark:border-white tablet:font-semibold desktop:text-[20px]">
              Work
            </Link>
            <a
              href="#contact"
              className="border-b-2 border-transparent text-Gray600 duration-700 hover:border-black hover:text-black dark:text-white hover:dark:border-white tablet:font-semibold desktop:text-[20px]"
            >
              Contact
            </a>
          </div>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { CopyIcon } from "../../assets/icon/copy-icon";
import { EmailIcon } from "../../assets/icon/email-icon";
import { PhoneIcon } from "../../assets/icon/phone-icon";
import { Link } from "react-router-dom";
import { GitHubIcon } from "../../assets/icon/git-hub-icon";
import { LinkedinIcon } from "../../assets/icon/linkedin-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { InstagramIcon } from "../../assets/icon/instagram-icon";
export const Footer = () => {
  return (
    <>
      <div className="container py-6">
        <p className="mx-auto w-[115px] rounded-full bg-Gray200 py-1 text-center text-Gray600 dark:bg-GrayDark200 dark:text-GrayDark600">
          Get in Touch
        </p>
        <div>
          <p className="mx-auto mt-4 max-w-[600px] text-center text-Gray600 dark:text-GrayDark600 desktop:text-[20px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <EmailIcon />
            <p className="text-Gray900 dark:text-GrayDark900 desktop:text-[20px]">
              sirojiddinovnuriddin717@gmail.com
            </p>
            <span className="cursor-pointer">
              <CopyIcon />
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <PhoneIcon />
            <p className="text-Gray900 dark:text-GrayDark900 desktop:text-[20px]">
              +998 99 816 93 99
            </p>
            <span className="cursor-pointer">
              <CopyIcon />
            </span>
          </div>

          <p className="mt-6 text-center text-Gray600 dark:text-GrayDark600">
            You may also find me on these platforms!
          </p>
          {/* Links */}
          <div className="mt-4 flex items-center justify-center gap-3">
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
      <div className="bg-Gray50 py-3 text-center dark:bg-GrayDark50">
        <p className="text-Gray600 dark:text-GrayDark600">
          2023 | Designed and coded with by Nuriddin
        </p>
      </div>
    </>
  );
};
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChangeLanguage } from "../../common";

import LogoIcon from "@/public/images/logo.svg";

import "./SignIn.scss";

export default function SignIn() {
  const localeAuthSignInPage = useTranslations("Auth.SignIn");
  const localeStartPage = useTranslations("MainPage");

  return (
    <>
      <main className={"sign-in"}>
        <div className={"sign-in__left"}></div>

        <div className={"sign-in__right"}>
          <form
            className={"sign-in__form"}
          >
            <div className={"sign-in__header-form"}>
              <div className={"sign-in__header-logo-container"}>
                <Image
                  src={LogoIcon}
                  alt={"Logo"}
                  height={40}
                  className={"sign-in__header-logo-img"}
                />

                <span className={"sign-in__header-logo-title"}>
                  {"Scrollgard"}
                </span>
              </div>
            </div>

            <div className={"sign-in__main-form"}>
              <span className={"sign-in__main-title"}>
                {localeStartPage("welcome")}
              </span>

              <div className={"sign-in__main-body"}>
                <input
                  type={"email"}
                  className={"sign-in__main-input"}
                  placeholder={localeAuthSignInPage("inputEmail")}
                />

                <input
                  type={"password"}
                  className={"sign-in__main-input"}
                  placeholder={localeAuthSignInPage("inputPassword")}
                />

                <button
                  type={"submit"}
                  className={"sign-in__main-button"}
                >
                  {localeAuthSignInPage("submitButton")}
                </button>
              </div>

              <div className={"sign-in__main-sign-up"}>
                <span className={"sign-in__main-question"}>
                  {localeAuthSignInPage("question")}
                </span>
                <Link
                  href={"/auth/sign-up"}
                  className={"sign-in__main-link"}
                >
                  {localeAuthSignInPage("signUpLink")}
                </Link>
              </div>
            </div>

            <div className={"sign-in__footer-form"}>
              <div className={"sign-in__select-container"}>
                <ChangeLanguage />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

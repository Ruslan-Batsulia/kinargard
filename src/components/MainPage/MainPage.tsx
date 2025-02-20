"use client";

import { useTranslations } from "next-intl";
import { useChangeLocale } from "@/src/common/hooks/ChangeLocale";

import "./MainPage.scss";

export default function MainPage() {
  const localeMainPage = useTranslations("MainPage");

  const { changeLanguage } = useChangeLocale();

  return (
    <>
      <div>{localeMainPage("welcome")}</div>

      <button
        onClick={() => changeLanguage("en")}
      >
        {"Eng"}
      </button>
      <button
        onClick={() => changeLanguage("uk")}
      >
        {"Укр"}
      </button>
    </>
  );
};

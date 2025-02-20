"use client";

import { useLocale, useTranslations } from "next-intl";
import { useChangeLocale } from "@/src/common/hooks/useChangeLocale";

import "./MainPage.scss";
import { useEffect } from "react";

export default function MainPage() {
  const locale = useLocale();
  const { changeLanguage } = useChangeLocale();
  const localeMainPage = useTranslations("MainPage");

  useEffect(() => {
    console.log("Current locale:", locale);
  }, []);

  return (
    <>
      <div>{localeMainPage("welcome")}</div>

      <button
        onClick={() => changeLanguage("en")}
        disabled={locale === "en"}
      >
        {"Eng"}
      </button>
      <button
        onClick={() => changeLanguage("uk")}
        disabled={locale === "uk"}
      >
        {"Укр"}
      </button>
    </>
  );
};

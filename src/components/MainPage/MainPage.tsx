"use client";

import { useLocale, useTranslations } from "next-intl";
import { useChangeLocale } from "@/src/common/hooks/useChangeLocale";

import "./MainPage.scss";

export default function MainPage() {
  const locale = useLocale();
  const { changeLanguage } = useChangeLocale();
  const localeMainPage = useTranslations("MainPage");

  return (
    <>
      <main className="main-page">
        <div className="main-page__text">
          {localeMainPage("welcome")}
        </div>

        <div>
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
        </div>
      </main>
    </>
  );
};

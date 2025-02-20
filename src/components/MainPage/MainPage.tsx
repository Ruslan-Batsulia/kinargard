"use client";

import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import "./MainPage.scss";

export default function MainPage() {
  const { push } = useRouter();
  const localeMainPage = useTranslations("MainPage");

  const changeLanguage = (newLocale: string) => {
    push("/", { locale: newLocale });
  };

  return (
    <>
      <div>{localeMainPage("welcome")}</div>

      <button
        onClick={() => changeLanguage("en")}
      >
        Eng
      </button>
      <button
        onClick={() => changeLanguage("uk")}
      >
        Укр
      </button>
    </>
  );
};

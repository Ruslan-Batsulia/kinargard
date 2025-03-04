"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { Locale } from "@/src/common/types";
import { useChangeLocale } from "@/src/common/hooks/useChangeLocale";
import changeLanguageIcon from "@/public/images/DarkTheme/common/ChangeLanguage.svg";

import arrowDown from "@/public/images/DarkTheme/common/ArrowDown.svg";

import "./ChangeLanguage.scss";

type Option = {
  label: string;
  value: Locale;
};

const options: Option[] = [
  {
    label: "English",
    value: "en"
  },
  {
    label: "Українська",
    value: "uk"
  }
] as const;

export default function ChangeLanguage() {
  const currentLocale = useLocale();
  const { changeLanguage } = useChangeLocale();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: Option) => {
    if (option.value !== currentLocale) {
      changeLanguage(option.value);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className={"change-language"}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={"change-language__toggle"}
        >
          <Image
            src={changeLanguageIcon}
            alt={"Change Language Icon"}
            height={24}
            className={"change-language__icon"}
          />

          <span className={"change-language__title"}>
            {options.find((item) => item.value === currentLocale)?.label ?? "Locale not found" }
          </span>

          <Image
            src={arrowDown}
            alt={"Arrow Down Icon"}
            height={10}
            className={
              "change-language__arrow" +
              (isOpen ? " change-language__arrow--up" : "")
            }
          />
        </div>

        {
          isOpen && (
            <ul className={"change-language__select-list"}>
              {
                options.map((item) => {
                  return (
                    <li
                      key={item.value}
                      onClick={() => handleSelect(item)}
                      className={"change-language__select-item"}
                    >
                      {item.label}
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </div>
    </>
  );
};

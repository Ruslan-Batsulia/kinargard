"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useGlobalContext } from "@/src/common/context/SideBarContext";

import burgerMenuDefault from "@/public/images/common/darkTheme/burger-default.svg";

import "./Main.scss";

export default function MainPage() {
  const localeMainPage = useTranslations("MainPage");
  
  const {
    getGlobalState: {
      sideBarHidden
    },
    setGlobalField,
  } = useGlobalContext();

  const handleToggleSidebar = () => {
    setGlobalField("sideBarHidden", (prev: boolean) => !prev);
  };

  return (
    <>
      <main className="main-page">
        <button
          className={
            "main-page__burger-menu" +
            (!sideBarHidden ? " main-page__burger-menu--hidden" : "")
          }
          onClick={handleToggleSidebar}
        >
          <Image
            src={burgerMenuDefault}
            alt={"Burger Menu"}
            className={"main-page__burger-menu-img"}
          />
        </button>
        
        <div className="main-page__text">
          {localeMainPage("welcome")}
        </div>
      </main>
    </>
  );
};

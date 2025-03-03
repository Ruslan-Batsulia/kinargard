"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/src/common/store/store";
import { ToggleSideBarHidden } from "@/src/common/store/reducers/SideBarHidden";

import burgerMenuDefault from "@/public/images/common/darkTheme/burger-default.svg";

import "./Main.scss";

export default function MainPage() {
  const localeMainPage = useTranslations("MainPage");
  const sideBarHiddenReducer = useSelector((state: StoreType) => state.sideBarHidden.sideBarHidden);

  const dispatch = useDispatch();

  return (
    <>
      <main className="main-page">
        <button
          className={
            "main-page__burger-menu" +
            (!sideBarHiddenReducer ? " main-page__burger-menu--hidden" : "")
          }
          onClick={() => {
            dispatch({ type: ToggleSideBarHidden.TOGGLE_SIDEBAR });
          }}
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

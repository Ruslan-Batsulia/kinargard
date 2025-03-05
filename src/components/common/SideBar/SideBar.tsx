"use client";

import Image from "next/image";
import { useGlobalContext } from "@/src/common/context/SideBarContext";

import burgerMenuDefault from "@/public/images/DarkTheme/common/burger-default.svg";

import "./SideBar.scss";

export default function SideBar() {
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
      <aside
        className={
          "side-bar" +
          (sideBarHidden ? " side-bar--hidden" : "")
        }
      >
        <div className={"side-bar__backdrop"}>
          <section className={"side-bar__header"}>
            <button
              className={"side-bar__burger-menu"}
              onClick={handleToggleSidebar}
            >
              <Image
                src={burgerMenuDefault}
                alt={"Burger Menu"}
                className={"side-bar__burger-menu-img"}
              />
            </button>
          </section>
          <section>

          </section>
        </div>
      </aside>
    </>
  );
};
